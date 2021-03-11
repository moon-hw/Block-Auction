import React from "react";
import { connect } from "react-redux";
import { signUp } from "./store/actions/auth";

class SignUp extends React.Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  
    handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      this.props.signUp(this.state);
      console.log(this.state);
    };

    render() {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h5>Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn">Sign Up</button>
            </div>
          </form>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
      return {
          signUp: newUser => dispatch(signUp(newUser)),
      };
  };

  export default connect(
      null,
      mapDispatchToProps,
  )(SignUp);