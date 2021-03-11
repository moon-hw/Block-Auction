import dotenv from 'dotenv';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

console.log(firebaseConfig.apiKey);
console.log(firebaseConfig.projectId);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();            // auth 변수
export const firestore = firebase.firestore();  // firestore 접근 변수

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'}); // -> 다른 로그인 구현 가능하도록 할때, 매번 로그인 시 선택 할 수 있게함.

// 구글 로그인 구현
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider).then(res => {
        console.log(res.user)
    }).catch(error => {
        console.log(error.message);
    })
}

// 혹시 전체 라이브러리가 필요할수도 있기에, firebase 전체 export
export default firebase;