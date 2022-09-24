import React from 'react';
import { Add, Multifly } from '../../utilities/calculate';

const Shoes = () => {
    const MultiflyResult = Multifly(12, 12);
    const SumShoes = Add(20, 20);
    return (
        <div>
           <h2>This is shoes components</h2> 
           <p>Result : {MultiflyResult}</p>
           <p>Sum of shoes : {SumShoes}</p>
        </div>
    );
};

export default Shoes;