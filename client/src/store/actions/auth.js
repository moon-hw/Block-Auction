import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR } from './ActionTypes';
import firebase from '../../firebase.utils';

export const signUp = newUser => {
    const firestore = firebase.firestore();
    
    return (dispatch, getState) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(res => {
                return firestore
                    .collection('users')
                    .add({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        initials: newUser.firstName[0] + newUser.lastName[0],
                    })
                    .then(() => {
                        dispatch({ type: SIGNUP_SUCCESS });
                    })
                    .catch(err => {
                        dispatch({ type: SIGNUP_ERROR, err });
                    })
            });
    };
};

export const signIn = credentials => {
    return (dispatch, getState) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: SIGNIN_SUCCESS});
                console.log("success login");
            })
            .catch(err => {
                dispatch({ type: SIGNIN_ERROR, err});
            });
    };
};
