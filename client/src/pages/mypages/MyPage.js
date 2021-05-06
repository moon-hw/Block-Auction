import React, { useEffect, useState, useReducer } from "react";
import MyPageMenu from "../../components/MyPageMenu";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "../../firebase.utils";
import { userApi } from "../../api";
import { loginFunctions } from "../../auth/AuthWatchers";
import {
  MyPageWrapper,
  InputWithLabel,
  AuthContent,
  AuthButton,
} from "../../auth";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
    [action.email]: action.value,
    [action.account]: action.value,
    [action.nickName]: action.value,
    [action.phoneNumber]: action.value,
    [action.address]: action.value,
  };
}
const MyPage = () => {
  const history = useHistory();
  const [userprofile, setuserProfile] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    account: "",
    nickName: "",
    phoneNumber: "",
    address: "",
  });
  const { name, email, account, nickName, phoneNumber, address } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  useEffect(() => {
    
    getInfo();
  },[]);

  
  async function getInfo(){
    const userInfo = loginFunctions.getUserInfo();
  if (!userInfo) return;
      await userApi.getUserData({ uid: userInfo.uid })
    .then((data) =>{
      console.log(data)
      setuserProfile(data);
      console.log(userprofile);
    })
    .catch((err) => console.log(err));
  }
  const UserInfo = (userInfo) => {
    firestore
      .collection("users")
      .doc(userInfo.uid)
      .collection("users")
      .add({
        name: userInfo.name,
        nickName: userInfo.nickName,
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.email,
        address: userInfo.address,
        account: userInfo.account,
        isDone: false,
      })
      .then((docRef) => {
        docRef.update({
          profileID: docRef.id,
        });
      });
    setuserProfile("");
  };
  return (
    <div>
      <MyPageMenu />
      <button
        onClick={() => {
          auth
            .signOut()
            .then(() => {
              loginFunctions.onLogout();
              console.log(`logout`);
              history.push("/");
            })
            .catch((err) => {
              console.log(`logout error : ${err}`);
            });
        }}
      >
        SIGN OUT
      </button>

      <MyPageWrapper>
        <AuthContent title="회원 기본 정보 기입">
          <InputWithLabel label="이름" name="name">
            <input name="name" value={userprofile.name} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="이메일" name="email">
            <input name="email" value={userprofile.email} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="가상계좌주소" name="account">
            <input name="account" value={userprofile.account} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="별명" name="nickName">
            <input name="nickName" value={userprofile.nickName} onChange={onChange} />
          </InputWithLabel>
          <button>중복검사</button>
          <InputWithLabel label="연락처" name="phoneNumber">
            <input name="phoneNumber" value={userprofile.phoneNumber} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="주소" name="Address"></InputWithLabel>
          <AuthContent detail="상세정보" />
          <InputWithLabel label="상세정보를 기입해주세요"></InputWithLabel>
          <AuthButton type="submit">수정완료</AuthButton>
        </AuthContent>
      </MyPageWrapper>
    </div>
  );
};

export default MyPage;
