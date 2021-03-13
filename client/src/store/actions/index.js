import * as types from './ActionTypes';
import firebase from 'firebase/app';

export const create_auction = auction => {
    // 비동기적 firebase call
    return (dispatch, getState) => {
        firebase
            .firestore()
            .collection('auction')
            .add({
                ...auction,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({ type: types.CREATE_AUCTION, auction});
            })
            .catch(err => {
                dispatch({ type: types.CREATE_AUCTION, err});
            });
    };
};

export const authentication = () => ({
    type: types.AUTHENTICATION
});

