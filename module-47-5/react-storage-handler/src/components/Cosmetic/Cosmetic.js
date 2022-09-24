import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    return (
        <div>
            <h2>Buy this : {name}</h2>
            <p>Only for : ${price}</p>
            <p><small>ID : {id}</small></p>
        </div>
    );
};

export default Cosmetic;