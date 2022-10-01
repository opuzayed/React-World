import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PriceOption = ({option}) => {
    return (
        <div className = ' bg-indigo-400 m-3 rounded-md p-6'>
            <div>
                <h3><span className='text-6xl font-bold text-white'>{option.price}</span></h3>
                <span className='text-2xl text-gray-200'>/mon</span>
                <p className='text-4xl my-6'>{option.name}</p>
                </div>
                <div className='flex items-center'>
                <CheckCircleIcon className="h-4 w-4 text-blue-500"/>
                <p className='ml-2'>Awesome feature</p>
            </div>
        </div>
    );
};

export default PriceOption;