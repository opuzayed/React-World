import React from 'react';
import PriceOption from '../PriceOption/PriceOption';


const Pricing = () => {
    const pricingOptions = [
        {id : 1, name : 'free', price : 0, featues : [
            'awesome features',
            'naughty features',
            'dusto features',
            'amul features',
            'halum features'
        ]},
        {id : 2, name : 'medium', price : 9.99, featues : [
            'awesome features',
            'naughty features',
            'dusto features',
            'amul features',
            'halum features'
        ]},
        {id : 3, name : 'platinum', price : 19.99, featues : [
            'awesome features',
            'naughty features',
            'dusto features',
            'amul features',
            'halum features'
        ]}
    ];
    return (
        <div>
            <h2 className='text-6xl font-bold bg-indigo-400 p-12 text-white'>Best deal of the town</h2>
            <div className='grid grid-cols-3 gap-3'>
            {
                pricingOptions.map(option => <PriceOption
                key={option.id}
                option={option}>
                </PriceOption>)
            }
            
            </div>
        </div>
    );
};

export default Pricing;