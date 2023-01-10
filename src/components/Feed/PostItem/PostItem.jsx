import React from "react";
import s from "./Post.module.css";
import avatar from "../../../img/avatar.jpg";
import like from "../../../img/like.svg";

const PostItem = (props) => {
   return (
      <div className={s.post}>
         <div className={s.info}>
            <img className={s.avatar} src={avatar} alt="logo" />
            <div className={s.name}>
               <h1>Kiwi Layder</h1>
            </div>
         </div>
         <span className={s.text}>{props.text}</span>
         <div className={s.like}>
            <img className={s.like_img} src={like} alt="logo" />
            <span>{props.likecount}</span>
         </div>
      </div>
   );
};

export default PostItem;
