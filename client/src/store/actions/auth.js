import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR } from './ActionTypes';
import firebase from '../../firebase.utils';

export const signup = (email, password) => async dispatch => {
    try {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(dataBeforeEmail => {
                firebase.auth().onAuthStateChanged(function(user){
                    user.sendEmailVerification();
                });
            })
            .then(dataAfterEmail => {
                firebase.auth().onAuthStateChanged(function(user) {
                    if(user.emailVerified) {
                        // email is verified
                        dispatch({
                            type: SIGNUP_SUCCESS,
                            payload:
                                "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
                        });
                    }else {
                        //email is not verified
                        dispatch({
                            type: SIGNUP_ERROR,
                            payload:
                                "something went wrong, we couldn't create your account. Please try again."
                        });
                    }
                });
            })
            .catch(function(error) {
                dispatch({
                    type: SIGNUP_ERROR,
                    payload :
                        "something went wrong, we couldn't create your account. Please try again."
                });
            });
    } catch (err) {
        dispatch({
            type: SIGNUP_ERROR,
            payload :
                "something went wrong, we couldn't create your account. Please try again."
        });
    }
};

export const signin = (email, password, callback) => async dispatch => {
    try {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type : SIGNIN_SUCCESS});
                callback();
            })
            .catch(() => {
                dispatch({
                    type: SIGNIN_ERROR,
                    payload: "Invalid login credentials"
                });
            });
    } catch (err) {
        dispatch({
            type: SIGNIN_ERROR,
            payload: "Invalid login credentials"
        });
    }
};