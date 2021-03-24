import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api";
import { auth } from "../../firebase.utils";
import { loginFunctions } from "../../auth/AuthWatchers";
import { DaumAddressModal } from "../../components/externalApi";

const AddInformation = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
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

  return (
      <>
        <p>추가 정보를 입력해주십시오.</p>
        <p>[ 기본 정보 ]</p>
        <div>이메일 : {email}</div>
        <div>이름 : {name}</div>
        <p>[ 추가 정보 ]</p>
        <div>
          <label htmlFor="nickName">별명</label>
          <br/>
          <input id={"nickName"} required placeholder="별명" />
        </div>
        <div>
          <label htmlFor="phoneNumber">연락처</label>
          <br/>
          <input id={"phoneNumber"} required placeholder="연락처" />
        </div>
        <div>
          <label htmlFor="address">주소</label>
          <DaumAddressModal setAddress={setAddress}/>
        </div>
        <div>
          <label htmlFor="accountNumber">비트코인 지갑 주소</label>
          <br/>
          <input id={"accountNumber"} required placeholder="비트코인 지갑 주소" />
        </div>
        <button
          onClick={() => {
            if (loading) return;
            setLoading(true);
            userApi
              .signUp({
                method: "GOOGLE",
                uid: auth.currentUser.uid,
                email: auth.currentUser.email,
                name: auth.currentUser.displayName,
                phone_number: document.getElementById("phoneNumber").value,
                address: address,
                account_number: document.getElementById("accountNumber").value,
              })
              .then(async () => {
                const idToken = await auth.currentUser.getIdToken();
                localStorage.setItem("idToken", idToken);
                localStorage.setItem("firstSignUp", "ok");
                // localstorage 이용 상태 저장.
                loginFunctions.onSuccess(auth.currentUser, true);

                history.push("/");
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
          }}>
          회원가입 하기
        </button>
      </>
  );
};
export default AddInformation;