import React, { useState, useEffect, useRef } from 'react';
import "../../css/Slider/Slider.css";
export default function Slider() {
    const [imgArr, setImgArr] = useState(['./images/slider/slider-1.jfif', './images/slider/slider-2.jfif', './images/slider/slider-3.jfif', './images/slider/slider-4.jfif'])
    const [count, setCount] = useState(0);
    const [mousedOver, setMousedOver] = useState(true);

    var interval;

    useEffect(() => {
        if (mousedOver == true) {
            interval = setInterval(() => {
                setCount(previousValue => previousValue + 1);
            }, 3000);
            return () => clearInterval(interval);
        } else {
            clearInterval(interval);
        }
    }, [mousedOver]);
    count > 3 && setCount(0);

    const nums1 = useRef();
    const nums2 = useRef();
    const nums3 = useRef();
    const nums4 = useRef();

    return (
        <div className="slider" onMouseOver={() => { setMousedOver(false) }} onMouseOut={() => { setMousedOver(true) }} >
            <img src={imgArr[count]} />
            <ul>
                <li data-num="0" ref={nums1} onClick={() => { setCount(nums1.current.dataset.num); console.log(count) }}></li>
                <li data-num="1" ref={nums2} onClick={() => setCount(nums2.current.dataset.num)}></li>
                <li data-num="2" ref={nums3} onClick={() => setCount(nums3.current.dataset.num)}></li>
                <li data-num="3" ref={nums4} onClick={() => setCount(nums4.current.dataset.num)}></li>
            </ul>
        </div>
    )
}