import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./filter.scss";
import Flip from "react-reveal/Flip";
import { searchInHome } from '../store/reducres/reducerSlice';


export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div className='filter'>
      <Flip left cascade>
        <div className='filter-content'>
          <span>Filter</span>
          <input type="text" placeholder='SEARCH...' onChange={(e) => dispatch(searchInHome({ e: e.target.value }))} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </Flip>
    </div>
  )
}
