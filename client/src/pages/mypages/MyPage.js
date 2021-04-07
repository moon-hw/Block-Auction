import React from 'react';
import MyPageMenu from '../../components/MyPageMenu';
import { useHistory } from 'react-router-dom';
import { loginFunctions } from '../../auth/AuthWatchers';
import { auth } from '../../firebase.utils';
import { MyPageWrapper, InputWithLabel, AuthContent, AuthButton} from '../../auth';
import Button from '../../components/Button';
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

                <InputWithLabel label="별명" name="nickName" >
            ㅇㅇㅇㅇ
            
                </InputWithLabel>
                <button>중복검사</button>

            <InputWithLabel label="연락처" name="phoneNumber">
                연락처
            </InputWithLabel>


            <InputWithLabel label="주소" name="Address">
               주소
            </InputWithLabel>

            <AuthContent detail="상세정보" />
            <InputWithLabel label="상세정보를 기입해주세요"> 
                주소
            </InputWithLabel>


            <InputWithLabel label="가상계좌주소" name="account">
               가상계좌주소
            </InputWithLabel>

            <AuthButton type="submit">수정완료</AuthButton>

            </AuthContent>
            </MyPageWrapper>
            </div>

    ); 
};

export default MyPage;