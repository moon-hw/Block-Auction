import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser}) => (
    <header>
        <Link to="/">
            <button>Home</button>
        </Link>
        <div className ="option">
            <Link to="/auction">
                <button>auction</button>
            </Link>
            <Link to="/users">
                <button>Users</button>
            </Link>
            <Link to="/Profile">
                <button>Profile</button>
            </Link>
        </div>
        
    </header>
    
)
      
export default Header;
