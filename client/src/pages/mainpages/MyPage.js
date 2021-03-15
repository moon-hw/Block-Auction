import React from 'react';
import { auth } from '../../firebase.utils';

const MyPage = () => {
    return (
        <div>
            <h1>마이 페이지</h1>
            <button onClick={() => auth.signOut()}>SIGN OUT</button>
        </div>
    ); 
};

export default MyPage;