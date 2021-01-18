import React from 'react';
import './itemCard.scss';

const ItemCard = ({name})=>{
    return (
        <div className="card">
         <h5>{name}</h5>
        </div>
    )
}
export default ItemCard;