import React from "react";
import s from "./Feed.module.css";
import PostItem from "./PostItem/PostItem";

const Feed = (props) => {
   let postItem = props.postData.post.map((p) => <PostItem text={p.text} likecount={p.likecount} />);

   return <div className={s.feed}>{postItem}</div>;
};

export default Feed;
