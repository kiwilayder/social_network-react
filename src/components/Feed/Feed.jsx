import React from 'react';
import s from './Feed.module.css';
import Post from '../Post/Post';

const Feed = () => {
    return ( 
    <div className={s.feed}>
       <Post likecount='5'/>
       <Post likecount='22'/> 
    </div>
    );
}

export default Feed;