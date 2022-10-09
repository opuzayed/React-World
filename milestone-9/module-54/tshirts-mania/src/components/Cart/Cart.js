import React from 'react';
import './Cart.css';
const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0)
    {
        message = <p>Please buy at least one item!!!</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h2>Amar jonno ekta</h2>
            <p>tomer jonno ekta</p>
            <h3>amar jonno rekta</h3>
        </div>
    }
    else{
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'green' : 'blue'}`}>Order Quantity : {cart.length}</h5>
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
            {
                cart.length === 3 ? <p>Ora tin jon ekshathe.</p> : <p>tin jon na</p>
            }
            {
                cart.length === 2 && <p>Double items</p>
            }
            {
                cart.length === 4 || <p>charta item na</p>
            }
        </div>
    );
};

export default Cart;