import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <h5><small>Gift : {house}</small></h5>
            <button onClick={()=> setHouse(house + 1)}>increase</button>
        </div>
    );
};

export default Special;