import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {id, name, email, username} = friend;
    return (
        <div className='friend'>
           <h2> Name : {name}</h2>
           <p>Email : {email}</p>
           <p><small>UserName :<Link to = {`/friend/${id}`}> {username} </Link></small></p>
        </div>
    );
};

export default Friend;