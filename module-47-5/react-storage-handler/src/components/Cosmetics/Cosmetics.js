import React from 'react';
import { Add } from '../../utilities/calculate';
//import Add from '../../utilities/calculate';

const Cosmetics = () => {
    const total = Add(30, 50);
    return (
        <div>
            <h2>Welcome to my cosmetics store</h2>
            <p>Total : {total}</p>
        </div>
    );
};

export default Cosmetics;