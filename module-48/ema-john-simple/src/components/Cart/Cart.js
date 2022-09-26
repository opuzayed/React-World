import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
           <h4>Order Summary</h4>
            <h4>Selected Item's : {cart.length}</h4> 
        </div>
    );
};

export default Cart;