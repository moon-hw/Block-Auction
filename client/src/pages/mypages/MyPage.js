import React from 'react';
import MyPageMenu from '../../components/MyPageMenu';
import { useHistory } from 'react-router-dom';
import { loginFunctions } from '../../auth/AuthWatchers';
import { auth } from '../../firebase.utils';

const MyPage = () => {
    const history = useHistory();

    return (
        <div>
            <h1>마이 페이지</h1>
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
        </div>
    ); 
};

export default MyPage;