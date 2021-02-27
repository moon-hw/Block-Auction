import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { signInWithGoogle } from './firebase.utils';

class Home extends React.Component {
    state = {users: []};
    
    componentDidMount(){
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
  
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <div>current user!</div>
            {this.state.users.map(user =>
                <div key={user.id}>{user.username}</div>
              )}
            <Link to="/auction">
                <button className="EnterAuctionBtn">go to auction</button>
            </Link>
            <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
          </header>
        </div>
      );
    }
  }
  
  export default Home;
  