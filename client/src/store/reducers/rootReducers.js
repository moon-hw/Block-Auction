import auth from './auth';
import auction from './auction';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
//import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
    auth: auth,
    auction : auction,
    firebaseReducer,
});

export default rootReducer;
