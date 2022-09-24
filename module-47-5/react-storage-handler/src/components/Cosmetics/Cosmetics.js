import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {id : 1, name : 'alta', price : 100},
        {id : 2, name : 'palish', price : 200},
        {id : 3, name : 'malish', price : 300},
        {id : 4, name : 'talish', price : 400},
        {id : 5, name : 'balish', price : 500}
    ];
        return (
    
        <div>
            <h2>Welcome to my cosmetics store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key = {cosmetic.id}
                    cosmetic = {cosmetic}
                    ></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;