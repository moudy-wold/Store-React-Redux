import React from 'react';
import "../../css/header/header.css";
import { words } from '../../words';
import { useDispatch } from 'react-redux';
import { oenNavFun } from "../store/reducres/reducerSlice";



export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className='header'>
            <div className="header-logo">Moudy</div>
            <span className='header-word'>{words.headerTitle}</span>
            <span className="toggle" onClick={() => { dispatch(oenNavFun()) }}>
                <span className='tog'></span>
                <span className='tog'></span>
                <span className='tog'></span>
            </span>
        </header>
    )
}
