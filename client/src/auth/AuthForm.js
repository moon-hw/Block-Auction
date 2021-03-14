import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { signInWithGoogle } from '../firebase.utils';

//로그인 폼 보여줌
const Google = styled.div`
    text-align:center;
    margin-bottom:0.5rem;
`;

const AuthFormBlock = styled.div``;
    const AuthForm = () => {
        return (
            <AuthFormBlock >
                <Google>
                    <Button gray fullWidth onClick = {signInWithGoogle}>구글 로그인</Button>
                </Google>
            </AuthFormBlock >

        )
    }


export default AuthForm;