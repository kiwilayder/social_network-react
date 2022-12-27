import React from "react";
import s from "./New-post.module.css";

const NewPost = (props) => {
   let addNewPost = React.createRef();

   let addPost = () => {
      props.dispatch({ type: "ADD-POST" });
   };

   let newTextPost = () => {
      props.dispatch({ type: "UPDATE-TEXT", textPost: addNewPost.current.value });
   };

   return (
      <div className={s.new_post}>
         <span className={s.title}>What's new with you?</span>
         <textarea ref={addNewPost} onChange={newTextPost} value={props.newPostText} className={s.textarea} />
         <button onClick={addPost} className={s.submit}>
            Submit
         </button>
      </div>
   );
};

export default NewPost;
