import React from 'react';
import './Button.scss';

const Button = ({addItemToList})=>{
    return (
        <button className="button" onClick={()=>addItemToList()}>
            <span>+</span>
        </button>
    )
}
export default Button;