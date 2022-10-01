import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1, name:'macbook', price : 287845},
        {id:2, name:'probook', price : 287845},
        {id:3, name:'surfacebook', price : 287845}
    ];
    return (
        <div className="card-group">
            {
                products.map(product =><Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default CardGroup;