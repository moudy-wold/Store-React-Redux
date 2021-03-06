import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../css/LoginPage/LoginPage.css';
import { handleBlurInput } from "../store/reducres/reducerSlice";

export default function LoginPage() {
    // To Save Data entered From User
    const { orderData } = useSelector(state => state.userData);
    //For Form
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const dispatch = useDispatch();
    return (
        <div className="login-page">
            <div className='box'>
                <p className='Logo-login'> MOUDY</p>
                <p className="text">Create Your New Account</p>
                <form onSubmit={handleSubmit}>
                    <label>User Name</label>
                    <input type='text' required placeholder='Enter New User Name' onBlur={(e) => dispatch(handleBlurInput({ name: e.target.value }))} />
                    <label>Email</label>
                    <input type='email' required placeholder='Enter Your Email' onBlur={(e) => dispatch(handleBlurInput({ email: e.target.value }))} />
                    <label>Password</label>
                    <input type='password' required placeholder='Create Password' onBlur={(e) => dispatch(handleBlurInput({ pass: e.target.value }))} />
                    <NavLink className={Object.keys(orderData).length == 3 ? "sign-up" : "noactive"} type='submit' to='./layout/home'>{Object.keys(orderData).length == 3 ? "sign in" : "Sign Up"}</NavLink>
                    <NavLink to='./layout/home'>Skip</NavLink>
                </form>
            </div>
        </div>
    )
}