import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0)
    {
        message = <p>Please buy at least one item!!!</p>
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Order Quantity : {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>Remove Item</button>
                </p>)
            }
            {
                message
            }
        </div>
    );
};

export default Cart;