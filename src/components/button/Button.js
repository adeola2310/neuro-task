import React from 'react';
import './Button.scss';

const Button = ({addItemToList})=>{
    return (
        <button className="btn btn-white btn-animate" onClick={()=>addItemToList()}>
            <span>+</span>
        </button>
    )
}
export default Button;