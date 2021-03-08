import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducers';
import thunk from 'redux-thunk';

// firebase
import firebase from 'firebase/app';
import fbConfig from './firebase.utils';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

// react-redux-firebase 데이터베이스 접근 설정
const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
