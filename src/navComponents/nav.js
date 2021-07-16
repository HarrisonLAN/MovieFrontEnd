import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/movie"><li>Movies</li></Link>
                <Link to="/account"><li>AccountS</li></Link>
                <Link to="/signin"><li>SignIn</li></Link>
                <Link to="/register"><li>Register</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;