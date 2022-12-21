import React from "react";
import s from "./New-post.module.css";

const NewPost = (props) => {
   let addNewPost = React.createRef();

   let addPost = () => {
      props.addPost();
   };

   let newTextPost = () => {
      let textPost = addNewPost.current.value;
      props.updateText(textPost);
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
