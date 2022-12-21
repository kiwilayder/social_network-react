import React from "react";
import s from "./Feed.module.css";
import Post from "../Post/Post";

const Feed = (props) => {
   let post_item = props.postData.post.map((p) => <Post text={p.text} likecount={p.likecount} />);

   return <div className={s.feed}>{post_item}</div>;
};

export default Feed;
