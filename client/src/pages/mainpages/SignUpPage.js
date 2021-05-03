////로그인 백업

import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api";
import { auth } from "../../firebase.utils";
import { loginFunctions } from "../../auth/AuthWatchers";
import { DaumAddressModal } from "../../components/externalApi";
import { useForm } from "react-hook-form";
import {
  AuthWrapper,
  InputWithLabel,
  AuthContent,
  AuthButton,
} from "../../auth";
import { loadWeb3 } from "../../auction/useWeb3";

const AddInformationForm = () => {
  const { register, errors, handleSubmit } = useForm({ mode: "onBlur" });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const ethereum = loadWeb3();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        setName(user.displayName);
      } else {
        setEmail("");
        setName("");
      }
      return () => unsubscribeFromAuth();
    });
  }, []);

  useEffect(() => {
    if (ethereum) {
      setAccount(window.ethereum.selectedAddress);
    } else {
      setAccount(`meta mask 연동이 필요합니다!`);
    }
  }, [ethereum]);

  const onFormSubmit = (data) => {
    if (loading) return;
    setLoading(true);
    const userData = {
      method: "GOOGLE",
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      name: auth.currentUser.displayName,
      nickName: data.nickName,
      phoneNumber: data.phoneNumber,
      address: address + data.detailedAddress,
      accountNumber: account,
      selfIntorduction: "",
      buyingFailure: 0,
    };
    userApi
      .signUp(userData)
      .then(async () => {
        const idToken = await auth.currentUser.getIdToken();
        localStorage.setItem("idToken", idToken);
        // localstorage 이용 상태 저장.
        auth.currentUser.nickName = data.nickName;
        loginFunctions.onSuccess(auth.currentUser, true);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onErrors = (errors) => console.log(errors);

  return (
    <AuthWrapper>
      <AuthContent title="회원 기본 정보 기입">
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          <InputWithLabel label="이름" name="name">
            {name}
          </InputWithLabel>
          <InputWithLabel label="이메일" name="email">
            {email}
          </InputWithLabel>
          <InputWithLabel label="가상계좌주소" name="account">
            {account}
          </InputWithLabel>
          <InputWithLabel label="별명" name="nickName">
            <input
              type="text"
              ref={register({ required: true, maxLength: 6 })}
              name="nickName"
            />
          </InputWithLabel>
          {errors.nickName &&
            (errors.nickName.type === "required"
              ? "별명을 입력해주세요"
              : "별명은 최대 6글자까지 사용 가능합니다..")}

          <InputWithLabel label="연락처" name="phoneNumber">
            <input
              type="number"
              ref={register({ required: true })}
              name="phoneNumber"
            />
          </InputWithLabel>
          {errors.phoneNumber && "연락처를 기재해주세요"}

          <InputWithLabel label="주소" name="Address">
            <DaumAddressModal setAddress={setAddress} />
          </InputWithLabel>

          <AuthContent detail="상세정보" />
          <InputWithLabel label="상세정보를 기입해주세요">
            {address !== "" ? (
              <input type="text" ref={register} name="detailedAddress" />
            ) : null}
          </InputWithLabel>

          <AuthButton onClick={handleSubmit}>
            <button>가입완료</button>
          </AuthButton>
        </form>
      </AuthContent>
    </AuthWrapper>
  );
};

export default AddInformationForm;
