import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id} = post;
    return (
        <div>
            <h2>This is about post-Details : {id}</h2>
        </div>
    );
};

export default PostDetails;