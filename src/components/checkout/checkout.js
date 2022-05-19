import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/checkout/checkout.css';
import Input from '../input/input';
import Zoom from 'react-reveal/Zoom';
import { orderDoneSubmit, closeAccept, handleBlurInput } from "../store/reducres/reducerSlice";

export default function Checkout() {
    // To Open Close Accept Window
    const { openAccept } = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (

        <div>
            {openAccept &&
                <div className='user-info'>
                    <Zoom left >
                        <span onClick={() => dispatch(closeAccept())}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <Input
                                label="Name"
                                type="text"
                                handleChange={(e) => dispatch(handleBlurInput({ name: e.target.value }))}
                                name="name"
                                placeholder="Enter Your Name"
                            />
                            <Input
                                label="Email"
                                type="email"
                                handleChange={(e) => dispatch(handleBlurInput({ email: e.target.value }))}
                                name="email"
                                placeholder="Enter Your Email"
                            />
                            <Input
                                label="PassWord"
                                type="password"
                                handleChange={(e) => dispatch(handleBlurInput({ pass: e.target.value }))}
                                name="password"
                                placeholder="Enter Your Password"
                            />
                            <button onClick={() => dispatch(orderDoneSubmit())}>Submit</button>
                        </form>
                    </Zoom>
                </div>
            }
        </div >
    )
}
