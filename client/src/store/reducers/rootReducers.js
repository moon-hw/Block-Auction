import authReducer from './authReducers';
import auctionReducer from './authReducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    auction : auctionReducer,
});

export default rootReducer;
