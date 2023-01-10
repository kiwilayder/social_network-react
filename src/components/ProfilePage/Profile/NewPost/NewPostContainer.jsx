import React from "react";
import NewPost from "./NewPost";
import { updateTextActionCreator, addPostActionCreator } from "../../Redux/PostDataReducer";

const NewPostContainer = (props) => {
   let state = props.store.getState();

   let addPost = () => {
      props.store.dispatch(addPostActionCreator());
   };

   let newTextPost = (text) => {
      props.store.dispatch(updateTextActionCreator(text));
   };

   return <NewPost addPost={addPost} onChangeText={newTextPost} newPostText={state.postData.newPostText} />;
};

export default NewPostContainer;
