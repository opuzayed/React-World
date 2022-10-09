import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
           {
                tshirts.map(tshirt => <Tshirt
                key={tshirt.id}
                tshirt={tshirt}
                ></Tshirt>)
            }
        </div>
    );
};

export default Home;