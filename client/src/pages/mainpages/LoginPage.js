import React from 'react';
import AuthTemplate from '../../auth/AuthTemplate';
import AuthForm from '../../auth/AuthForm';

const LoginPage = () => {
    return (
    <div>
        <AuthTemplate>
            <AuthForm/>
        </AuthTemplate>
    </div>
    );
};

export default LoginPage;