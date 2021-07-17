import React from 'react';
import '../App.css'

function navMenu() {
    return (
        <div className="container mx-auto">
            <ul className="flex">
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">Home</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/movie">Movies</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/account">Account</a>
                </li>
            </ul>
        </div>
    );
}

export default navMenu;