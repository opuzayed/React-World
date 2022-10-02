import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>Details About : {friend.name}</h2>
            <h3>phone number : {friend.phone}</h3>
            <h2>Everything details you need to know</h2>
        </div>
    );
};

export default FriendDetails;
