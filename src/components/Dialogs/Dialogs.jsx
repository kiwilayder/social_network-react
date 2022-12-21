import React from "react";
import s from "./Dialogs.module.css";
import Message_item from "./Message_item/Message_item";
import Dialog_item from "./Dialog_item/Dialog_item";

const Dialogs = (props) => {
   let addNewMessage = React.createRef();

   let addMessage = () => {
      props.sendMessage();
   };

   let newTextMessage = () => {
      let newText = addNewMessage.current.value;
      props.updateMessage(newText);
   };

   let messages = props.dialogsData.messages.map((m) => <Message_item massage={m.message} />);
   let dialogs = props.dialogsData.users.map((d) => (
      <Dialog_item name={d.name} id={d.id} avatar={d.avatar} />
   ));

   return (
      <div className={s.wrapper}>
         <div className={s.wrapper__dialogs}>{dialogs}</div>
         <div className={s.windowMessages}>
            {messages}
            <div className={s.messages__sendMessage}>
               <textarea
                  ref={addNewMessage}
                  onChange={newTextMessage}
                  value={props.dialogsData.newMessage}
                  className={s.messages__areaMessage}
               />
               <button onClick={addMessage} className={s.messages__send}>
                  Send
               </button>
            </div>
         </div>
      </div>
   );
};

export default Dialogs;
