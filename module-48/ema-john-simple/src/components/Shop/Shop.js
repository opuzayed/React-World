import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from './../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        for(const id in storedCart)
        {
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct);
        }
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product 
                        key = {product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;