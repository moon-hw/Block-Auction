import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api";
import { auth } from "../../firebase.utils";
import { loginFunctions } from "../../auth/AuthWatchers";
import { DaumAddressModal } from "../../components/externalApi";
import { useForm } from "react-hook-form";

const AddInformationForm = () => {
  const { register, errors, handleSubmit } = useForm({ mode: "onBlur"});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user){
        setEmail(user.email);
        setName(user.displayName);  
      } else {
        setEmail('');
        setName('');
      }
      
      return () => unsubscribeFromAuth();
    })
  }, []);

  const onFormSubmit = (data) => {
    console.log("data", data);
    console.log(address, data.detailedAddress);

    if (loading) return;
    setLoading(true);
    userApi
      .signUp({
        method: "GOOGLE",
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        name: auth.currentUser.displayName,
        nickName: data.nickName,
        phoneNumber: data.phoneNumber,
        address: address + data.detailedAddress,
        accountNumber: data.account,
      })
      .then(async () => {
        const idToken = await auth.currentUser.getIdToken();
        localStorage.setItem("idToken", idToken);
        // localstorage 이용 상태 저장.
        loginFunctions.onSuccess(auth.currentUser, true);

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const onErrors = (errors) => console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <p>[ 기본정보 ]</p>
        <p>이름 : {name}</p>
        <p>이메일 : {email}</p>
        <p>[ 추가정보 ]</p>
        <div>
          별명 : <input type="text" ref={register({ required:true, maxLength:6})} name="nickName" />
          {errors.nickName && (errors.nickName.type === 'required' ? '별명을 입력해주세요' : '별명은 최대 6글자까지 사용 가능합니다..')}
        </div>
        <div>
          연락처 : <input type="number" ref={register({ required:true})} name="phoneNumber" />
          {errors.phoneNumber && '연락처를 기재해주세요'}
        </div>
        <div>
          <DaumAddressModal setAddress={setAddress}/>
          {address !== '' ? 
            <input type="text" ref={register} name="detailedAddress" />
          : null} 
        </div>
        <div>
          가상계좌주소 : <input type="text" ref={register({ required:true})} name="account" />
          {errors.account && '가상계좌주소를 기재해주세요'}
        </div>
        <button type="submit">가입완료</button>
      </form>
    </>
  )
}

export default AddInformationForm;