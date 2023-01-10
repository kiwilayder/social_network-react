import React from "react";
import s from "./NewPost.module.css";

const NewPost = (props) => {
   // let addNewPost = React.createRef();

   let addPost = () => {
      props.addPost();
   };

   let newTextPost = (e) => {
      let text = e.target.value;
      props.onChangeText(text);
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
