import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics]  = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data));
    },[])
    const total = getTotal(cosmetics);
        return (
    
        <div>
            <h2>Welcome to my cosmetics store</h2>
            <p>Total Money : {total}</p>
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