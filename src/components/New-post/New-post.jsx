import React from "react";
import s from "./New-post.module.css";

const NewPost = () => {
   return (
      <div className={s.new_post}>
         <span className={s.title}>What's new with you?</span>
         <div className={s.textarea} contenteditable="true"></div>
         <button className={s.submit}>Submit</button>
      </div>
   );
};

export default NewPost;
