import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../../css/orderDoneComp/orderDoneComp.css";
import { orderCloseFun } from "../store/reducres/reducerSlice";
import Bounce from 'react-reveal/Bounce'
export default function OrderDoneComp() {
    // To Save Data entered From User
    const { orderData } = useSelector(state => state.userData);
    // Collected Price
    const { totlaPrice } = useSelector(state => state.userData);
    // Selected Products`s Array
    const { selectedProducts } = useSelector(state => state.userData);
    const dispatch = useDispatch();

    return (
        <Bounce>
            <div className='order-div'>
                <span className='close' onClick={() => dispatch(orderCloseFun())}
                >&times;</span>
                <div className='title-order-done'>Order Done Successfully</div>
                <ul>
                    <li><span>Name :</span><span>{orderData.name}</span></li>
                    <li><span>Email :</span><span>{orderData.email}</span></li>
                    <li><span>Total Price :</span><span>{totlaPrice}</span></li>
                    <li><span>Selected Items :</span><span> {selectedProducts.map(item => (<span>{item.title}, </span>))} </span></li>
                </ul>
            </div>
        </Bounce>
    )
}
