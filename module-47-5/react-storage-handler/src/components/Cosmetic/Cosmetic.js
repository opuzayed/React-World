import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        addToDb(id);
    }
    const removeFromCart = id => {
        removeFromDb(id);
    }
     return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>Only for : ${price}</p>
            <p><small>ID : {id}</small></p>
            <button onClick={() =>addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>remove</button>
        </div>
    );
};

export default Cosmetic;