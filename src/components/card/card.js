import React, { useState } from 'react';
import Checkout from '../checkout/checkout';
import "./card.scss";
import Bounce from "react-reveal/Bounce";
import Jump from 'react-reveal/Jump';
import { useSelector, useDispatch } from 'react-redux';
import { handleRemoveFromSelected, setOpenAcceptOrder } from '../store/reducres/reducerSlice';
import OrderDoneComp from '../orderDoneComp/orderDoneComp';

export default function Card() {
    // Selected Products`s Array 
    var { selectedProducts } = useSelector(state => state.userData);
    // Collected Price 
    const { totlaPrice } = useSelector(state => state.userData);
    const dispatch = useDispatch();
    // To Open details Order Window
    const { orderStatus } = useSelector(state => state.userData);
    console.log(selectedProducts)
    return (
        <Bounce right cascade>
            <div className='card'>
                {selectedProducts.length > 0 &&
                    <div>
                        <Jump>
                            <p className="card-count">Thare Is {selectedProducts.length} Items In Cart</p>
                        </Jump>
                        {selectedProducts.map(product => (
                            <div className='product-card' key={product.title}>
                                <div className="product-deta">
                                    <img src={product.imageUrl} alt={product.desc} />
                                    <div className="data">
                                        <p>{product.title}</p>
                                        {product.size &&
                                            <p>Size: {product.selectedSize}</p>
                                        }
                                        <p>Price: {product.price}</p>
                                        <p>qty : {product.qty}</p>
                                    </div>
                                </div>
                                <div className='remove-card'>
                                    <button className='remove-btn' onClick={() => dispatch(handleRemoveFromSelected(product))}>Remove</button>
                                </div>
                            </div>
                        ))}
                        <div className='buy'>
                            <div className='total-price'>
                                Total Price: <span> ${totlaPrice}</span>
                            </div>
                            <button className='accept-order' onClick={() => dispatch(setOpenAcceptOrder())}>Accept Order</button>
                        </div>
                    </div>}
                <Checkout />
                {orderStatus && <OrderDoneComp />}
            </div>
        </Bounce>
    )
}
