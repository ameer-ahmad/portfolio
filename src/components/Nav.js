import React from 'react';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <header className="nav-bar">
            <img src={logo} className="logo" />
            <ul className="nav-links">
                <li><Link to="/">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Resume</li>
            </ul>
        </header>
    )
}

export default Nav;