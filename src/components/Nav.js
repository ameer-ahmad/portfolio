import React from 'react';
import logo from '../img/logo.png';

const Nav = () => {
    return (
        <header className="nav-bar">
            <img src={logo} className="logo" />
            <ul className="nav-links">
                <li>Work</li>
                <li>About</li>
                <li>Resume</li>
            </ul>
        </header>
    )
}

export default Nav;