import React from 'react';
// import { Link } from 'react-router-dom';
import { auth } from '../../../src/firebase.utils';
import '../../App.css';
import AdSlider from '../../components/AdSlider';
import Top5 from '../../components/Top5';

// import SignIn from './SignIn';
// import SignUp from './SignUp';

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

        if (this.state.currentUser){
          console.log(`current user : ${this.state.currentUser.displayName}`);
          console.log(`email : ${this.state.currentUser.email}`);
        }
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
          </header>
          <body>
          <AdSlider/>
              <Top5/>
          </body>
          
        </div>
      );
    }
  }
  
  
  export default Home;
  