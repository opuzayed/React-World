import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <h5><small>Gift : {ring}</small></h5>
        </div>
    );
};

export default Special;