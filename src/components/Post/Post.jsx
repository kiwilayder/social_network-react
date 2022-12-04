import React from 'react';
import s from './Post.module.css';
import avatar from '../../img/avatar.jpg';

const Post = () => {
    return ( 
    <div className={s.post}>
        <div className={s.info}>
            <img className={s.avatar} src={avatar} alt='logo'/>
                <div className={s.name}><h1>Kiwi Layder</h1></div>
                </div>
       <h1 className={s.title}>Lorem, ipsum dolor?</h1>
       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Soluta aperiam unde, optio dolore quidem eum delectus veritatis 
        ab explicabo nam aspernatur vero eius eligendi consectetur, cupiditate, 
        consequuntur dignissimos fugit culpa.</span>
    </div>
    );
}

export default Post;