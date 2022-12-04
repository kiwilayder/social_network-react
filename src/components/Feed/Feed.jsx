import React from 'react';
import s from './Feed.module.css';
import Post from '../Post/Post';

const Feed = () => {
    return ( 
    <div className={s.feed}>
       <Post />
       <Post /> 
    </div>
    );
}

export default Feed;