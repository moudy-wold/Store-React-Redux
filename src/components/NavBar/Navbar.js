import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/NavBar/navbar.css";
import { useSelector } from 'react-redux';
import LoginLogo from '../loginLogo/LoginLogo';

export default function Navbar() {
    // To Open Close NavBar  in media query
    const { activeNav } = useSelector(state => state.userData);
    return (

        <div className={activeNav ? "nav active" : "nav"}>
            <div className='logo-nav'>
                <LoginLogo />
            </div>
            <ul>

                <li><NavLink to='./home'>Home</NavLink></li>
                <li><NavLink to="./clothes">Clothes</NavLink></li>
                <li><NavLink to="./mobile">Mobile</NavLink></li>
                <li><NavLink to="./computer">Accessory</NavLink></li>
            </ul>
        </div>
    )
}
