import React, { useEffect, useState }from 'react';
import MyPageMenu from '../../components/MyPageMenu';
import { useHistory } from 'react-router-dom';
import { userApi } from "../../api";
import { auth } from "../../firebase.utils";
import { loginFunctions } from "../../auth/AuthWatchers";
import { DaumAddressModal } from "../../components/externalApi";
import { useForm } from "react-hook-form";
import { loadWeb3 } from "../../auction/useWeb3";
import { MyPageWrapper, InputWithLabel, AuthContent, AuthButton} from '../../auth';

const MyPage = () => {
  const history = useHistory();
    
    return (
        <div>
            <MyPageMenu/>
            <button onClick={() => {
                auth
                    .signOut()
                    .then(() => {
                        loginFunctions.onLogout();
                        console.log(`logout`);
                        history.push("/");
                    })
                    .catch((err) => {
                        console.log(`logout error : ${err}`);
                    })
            }}>SIGN OUT</button>
        

            <MyPageWrapper>
            <AuthContent title="회원 기본 정보 기입" >
            <InputWithLabel label="이름" name="name"></InputWithLabel>
            <InputWithLabel label="이메일" name="email"></InputWithLabel>
            <InputWithLabel label="가상계좌주소" name="account"></InputWithLabel>
                <InputWithLabel label="별명" name="nickName" >
                </InputWithLabel>
                <button>중복검사</button>

            <InputWithLabel label="연락처" name="phoneNumber">
            </InputWithLabel>


            <InputWithLabel label="주소" name="Address">

            </InputWithLabel>

            <AuthContent detail="상세정보" />
            <InputWithLabel label="상세정보를 기입해주세요"> 

            </InputWithLabel>

            <AuthButton type="submit">수정완료</AuthButton>

            </AuthContent>
            
            </MyPageWrapper>
            </div>

    ); 
};

export default MyPage;