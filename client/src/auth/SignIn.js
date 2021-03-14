import React from 'react';
import { signInWithGoogle } from '../firebase.utils';

export default function GoogleSignIn() {
    return (
        <div className="signin-button">
            <button onClick = {signInWithGoogle}> google login 도영이가 만든거</button>
        </div>
    );
};