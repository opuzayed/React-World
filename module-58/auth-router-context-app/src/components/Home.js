import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            home{user.email}
        </div>
    );
};

export default Home;