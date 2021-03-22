import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api";
import { auth } from "../../firebase.utils";
import { loginFunctions } from "../../auth/AuthWatchers";

const AddInformation = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  return (
      <>
        <p>추가 정보를 입력해주십시오.</p>
        <p>[ 기본 정보 ]</p>
        <div>{auth.currentUser.email}</div>
        <div>{auth.currentUser.displayName}</div>
        <div style={{ marginTop: "30px" }}>[ 추가 정보 ]</div>
        <input id={"nickName"} placeholder="별명" />
        <input id={"phoneNumber"} placeholder="연락처" />
        <input id={"accountNumber"} placeholder="비트코인 지갑 주소" />
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
                student_id: document.getElementById("nickName").value,
                phone_number: document.getElementById("phoneNumber").value,
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
                setLoading(false);
              });
          }}>
          회원가입 하기
        </button>
      </>
  );
};
export default AddInformation;