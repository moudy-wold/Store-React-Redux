import React from 'react'
import Filter from '../filter/filter';
import './Clothes.scss'

export default function Clothes() {
    console.log('Clothes')

    return (
        <div className='clothes'>
            <img src='../../../public/images/mobile/product3.jpg' />
            <Filter />

        </div>
    )
}
