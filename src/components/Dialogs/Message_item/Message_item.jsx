import React from "react";
import s from "../Dialogs.module.css";

const Message_item = (props) => {
   return <div className={s.message}>{props.massage}</div>;
};

export default Message_item;
