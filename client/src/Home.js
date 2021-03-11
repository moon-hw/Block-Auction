import React from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGoogle } from './firebase.utils';
import './App.css';

import SignIn from './SignIn';
import SignUp from './SignUp';

class Home extends React.Component {
    state = {
      users: [],
      currentUser: null
    };
    
    unsubscribeFromAuth = null;

    componentDidMount(){
      // backend 'users'에 요청을 보내 받아 users에 저장
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
      
      // 현재 로그인 상태를 가져옴
      auth.onAuthStateChanged(user => {
        this.setState({ currentUser : user});
      })
    }
    
    componentWillUnmount() {
      // if (this.unsubscribeFromAuth != null)
      //   this.unsubscribeFromAuth();
    }

    render(){
      return (
        <div className="App">
          <header className="App-header">
            {/* <div>current user!</div> */}
            {this.state.users.map(user =>
                <div key={user.id}>{user.username}</div>
              )}
            <Link to="/auction">
                <button className="EnterAuctionBtn">go to auction</button>
            </Link>
            <SignIn />
            <SignUp />
            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
          </header>
        </div>
      );
    }
  }
  
  export default Home;
  