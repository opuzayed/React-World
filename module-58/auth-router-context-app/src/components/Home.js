import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
        {/* {user.email} */} 
        <h2>this is home</h2>
        </div>
    );
};

export default Home;