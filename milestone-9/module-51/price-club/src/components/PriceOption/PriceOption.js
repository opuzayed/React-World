import React from 'react';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {featues} = option;
    return (
        <div className = ' bg-indigo-400 m-3 rounded-md p-6'>
            <div>
                <h3><span className='text-6xl font-bold text-white'>{option.price}</span></h3>
                <span className='text-2xl text-gray-200'>/mon</span>
                <p className='text-4xl my-6'>{option.name}</p>
                </div>
                {
                  featues.map((feature, idx) =><Feature key={idx} feature = {feature}></Feature>)  
                }
                <button className='bg-green-500 mt-4 w-full rounded-md py-2 text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;