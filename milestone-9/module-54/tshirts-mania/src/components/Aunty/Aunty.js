import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house, ring}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House : {house}</small></p>
            <section className='flex'>
                <Cousin house={house} ring = {ring}></Cousin>
                <Cousin house={house} ring = {ring}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;