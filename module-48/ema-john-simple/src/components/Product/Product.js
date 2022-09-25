import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, seller, img, ratings, price}= props.product;
    return (
        <div className='product'>
           <img src={img} alt='shoe'></img>
           <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;