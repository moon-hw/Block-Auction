import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
            <header>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/auction">
                <button>auction</button>
            </Link>
            <Link to="/users">
                <button>Users</button>
            </Link>
            </header>   
        );
    }
}

export default Header;
