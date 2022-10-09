import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists)
        {
            alert('This item already added');
        }
        else
        {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    return (
        <div className='home-container'>
           <div className="tshirt-container">
           {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Home;