import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order Quantity : {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                </p>)
            }
        </div>
    );
};

export default Cart;