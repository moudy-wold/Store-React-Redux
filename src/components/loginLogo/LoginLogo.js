import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import '../../css/loginLogo/LoginLogo.css';


export default function LogiLogo() {
    var { orderData } = useSelector(state => state.userData);
    const [open, setOpen] = useState(false);

    const openLogoFun = () => { !open ? setOpen(true) : setOpen(false); }
    const logOut = () => {
        window.localStorage.removeItem('nameEmail');
        window.location.reload();

    }
    return (
        <div className={Object.keys(orderData).length ? 'container-login-logo' : 'container-login-logo actived'}>
            {Object.keys(orderData).length ?
                <div className='login'>
                    <div className={open ? "details-logo actives" : "details-logo "}>
                        <i onClick={() => openLogoFun()} className="fa-solid fa-arrow-down"></i>
                        <div className={open ? "active" : ""}>
                            <span>{orderData.email}</span>
                            <span>EditeProfile</span>
                            <span onClick={() => logOut()} className='log-out'>LogOut<i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                        </div>
                    </div>
                    <div className='info'>
                        <span className='name'>{orderData.name}</span>
                        <img src='./images/ead-prayer.png' />
                    </div>
                </div> : <div className='sign-up'><NavLink to='../../'>Sign Up</NavLink><i className="fa-solid fa-user"></i></div>}
        </div>
    )
}
