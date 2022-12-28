import React from "react";
import s from "./New-post.module.css";
import { updateTextActionCreator } from "../redux/state";
import { addPostActionCreator } from "../redux/state";

const NewPost = (props) => {
   let addNewPost = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   };

   let newTextPost = () => {
      let text = addNewPost.current.value;
      props.dispatch(updateTextActionCreator(text));
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
