import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/"><li>Movies</li></Link>
                <Link to="User"><li>User</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;