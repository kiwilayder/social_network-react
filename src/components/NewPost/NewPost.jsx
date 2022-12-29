import React from "react";
import s from "./NewPost.module.css";
import { updateTextActionCreator, addPostActionCreator } from "../../Redux/PostDataReducer";

const NewPost = (props) => {
   // let addNewPost = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   };

   let newTextPost = (e) => {
      let text = e.target.value;
      props.dispatch(updateTextActionCreator(text));
   };

   return (
      <div className={s.new_post}>
         <span className={s.title}>What's new with you?</span>
         <textarea onChange={newTextPost} value={props.newPostText} className={s.textarea} />
         <button onClick={addPost} className={s.submit}>
            Submit
         </button>
      </div>
   );
};

export default NewPost;
