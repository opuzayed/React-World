import React from 'react';

const Tshirt = ({tshirt}) => {
    const {picture, name} = tshirt;
    return (
        <div>
            <img src={picture} alt='/'></img>
            <h2>{name}</h2>
        </div>
    );
};

export default Tshirt;