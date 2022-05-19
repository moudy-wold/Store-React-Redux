import React, { useState, useRef, useEffect } from 'react';
import '../../css/Mobile/Mobile.css';
import Filter from '../filter/filter';
import ModalP from '../products/modal';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddToCart, priceCollection } from "../store/reducres/reducerSlice";
import Bounce from "react-reveal/Bounce";
import { motion } from "framer-motion";
import LoginLogo from '../loginLogo/LoginLogo';

export default function Mobile() {

    const [product, setProduct] = useState('');
    const openModal = (product) => {
        setProduct(product);
    }
    const closeModal = () => {
        setProduct("")
    }
    const dispatch = useDispatch();
    const { mobileData } = useSelector(state => state.userData);
    // Came Data From Fliter Search
    const { filterData } = useSelector(state => state.userData);

    // Set Carousel
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 7);
    }, [])
    // To Filtered Data
    let filteredArr = mobileData.filter((item) => {
        if (filterData == '') {
            return item
        } else if (item.title.toLowerCase().includes(filterData.toLowerCase())) {
            return item
        }
    })
    return (
        <div className='mobile'>
            <Bounce left cascade>
                <div className='filter-home'><Filter /></div>
                <div className='login-logo-home'><LoginLogo /></div>
                <motion.div className="products" ref={carousel} whileTap={{ cursor: "grabbing" }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="products-content">
                        {filteredArr.length ? filteredArr.map(product => (
                            <motion.div className="product" key={product.id}>
                                <a href="#" onClick={() => openModal(product)}>
                                    <img src={product.imageUrl} alt={product.title} />
                                </a>
                                <div className='product-desc'>
                                    <span>{product.type}</span>
                                    <span>{product.price}$</span>
                                </div>
                                <button onClick={() => { dispatch(handleAddToCart(product)); dispatch(priceCollection()); }}> Add TO Cart</button>
                            </motion.div>
                        )) : <div className="no-product" >There Are No Matching Results</div>}
                        <ModalP closeModal={closeModal} product={product} /> </motion.div>
                </motion.div>
            </Bounce>
        </div>
    )
}
