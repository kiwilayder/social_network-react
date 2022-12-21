import React from "react";
import s from "./Dialogs.module.css";
import Message_item from "./Message_item/Message_item";
import Dialog_item from "./Dialog_item/Dialog_item";

const Dialogs = (props) => {
   let messages = props.dialogsData.messages.map((m) => <Message_item massage={m.message} />);
   let dialogs = props.dialogsData.users.map((d) => (
      <Dialog_item name={d.name} id={d.id} avatar={d.avatar} />
   ));

   return (
      <div className={s.dialogs}>
         <div className={s.container_dialogs}>{dialogs}</div>
         <div className={s.messages}>{messages}</div>
      </div>
   );
};

export default Dialogs;
