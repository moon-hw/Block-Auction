import React from "react";
import { connect } from "react-redux";
import { signIn } from "./store/actions/auth";

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
        console.log(this.state);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign In</h5>
                    <div className = "input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="input-btn">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn : creds => dispatch(signIn(creds)),
    };
};

export default connect(
    null,
    mapDispatchToProps,    
)(SignIn);