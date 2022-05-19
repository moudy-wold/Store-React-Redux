import React, { useState, useRef, useEffect } from 'react';
import '../../css/Home/Home.css';
import clothes from "../../clothes.json";
import mobile from "../../mobile.json";
import computer from "../../computer.json";
import ModalP from '../products/modal';
import { useSelector, useDispatch } from 'react-redux';
import { handleSelctSize, handleAddToCart, priceCollection } from "../store/reducres/reducerSlice";
import Bounce from "react-reveal/Bounce";
import { motion } from "framer-motion";
import Filter from '../filter/filter';
import LoginLogo from '../loginLogo/LoginLogo';
import Slider from '../Slider/Slider';


export default function Home() {
    // Set Carousel
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])
    const [product, setProduct] = useState('');

    const openModal = (product) => {
        setProduct(product);
    }
    const closeModal = () => {
        setProduct("")
    }
    const dispatch = useDispatch();
    // Came Data From Fliter Search
    const { filterData } = useSelector(state => state.userData);
    // Home Array
    const [arr, setArr] = useState([...mobile, ...computer, ...clothes])
    // To CHeck Selected Size Or No
    const { selectSize } = useSelector(state => state.userData);

    // for Fiter Data
    let filteredArr = arr.filter((item) => {
        if (filterData == "") {
            return item
        }
        else if (item.title.toLowerCase().includes(filterData.toLowerCase())) {
            return item
        }
    })

    return (
        <div className='home'>
            <div className='filter-home'><Filter /></div>
            <div className='login-logo-home'><LoginLogo /></div>
            <div className='size'>
                <span className='title-size'>
                    Please Select Your Size :
                </span>
                {selectSize == true && <span className='no-selected-size'> Please Select Size </span>}
                <select className='selecteSize' onChange={(e) => dispatch(handleSelctSize({ e: e.target.value }))}>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                    <option value='XXL'>XXL</option>
                </select>
            </div>
            <div className='slider-home'><Slider /></div>
            <Bounce left cascade>
                <motion.div className="products" ref={carousel} whileTap={{ cursor: "grabbing" }} initial="hidden" animate='show'>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="products-content">
                        {filteredArr.length ? filteredArr.map(product => (
                            <motion.div className="product" key={arr.indexOf(product)}>
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
                <div className='for-more'>For More Product Please Go To Sections</div>
            </Bounce>
        </div>
    )
}