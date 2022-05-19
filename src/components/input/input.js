import React from 'react';
import "../../css/input/input.css";

export default function Input(props) {
    return (
        <div className='inputs'>
            <label>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                required
                onBlur={(e) => props.handleChange(e)}
                placeholder={props.placeholder} />
        </div>
    )
}
