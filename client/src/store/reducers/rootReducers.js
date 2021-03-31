import auth from './auth';
import auction from './auction';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: auth,
    auction : auction,
    firebaseReducer,
    firestoreReducer,
});

export default rootReducer;
