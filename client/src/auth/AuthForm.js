import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import firebase, { auth } from "../firebase.utils";
import { useHistory } from "react-router-dom";
import { loginFunctions } from "./AuthWatchers";
import { userApi } from "../api";

//로그인 폼 보여줌
const Google = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const AuthFormBlock = styled.div``;
const AuthForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <AuthFormBlock>
      <Google>
        <Button
          gray
          fullWidth
          onClick={async () => {
            if (loading) return;
            try {
              setLoading(true);
              let provider = new firebase.auth.GoogleAuthProvider();
              await auth.signInWithPopup(provider);
              let { status } = await userApi.checkGoogleSignUped({
                uid: auth.currentUser.uid,
              });
              if (status === 200) {
                console.log(`회원가입 페이지로 이동`);
                history.push("/signup");
              } else if (status === 201) {
                const idToken = await auth.currentUser.getIdToken();
                localStorage.setItem("idToken", idToken);
                console.log(`구글 로그인 성공`);

                loginFunctions.onSuccess(auth.currentUser);
                history.push("/");
              }
            } catch (err) {
              console.log(`login error : ${err}`);
              setLoading(false);
            }
          }}
        >
          구글 로그인
        </Button>
      </Google>
    </AuthFormBlock>
  );
};

export default AuthForm;
