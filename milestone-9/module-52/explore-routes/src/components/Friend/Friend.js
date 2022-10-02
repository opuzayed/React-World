import React from 'react';

const Friend = ({friend}) => {
    const {name, email} = friend;
    return (
        <div>
           <h2> Name : {name}</h2>
           <p>Email : {email}</p>
        </div>
    );
};

export default Friend;