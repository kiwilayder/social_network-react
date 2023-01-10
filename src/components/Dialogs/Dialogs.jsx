import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
   let addMessage = () => {
      props.addMessage();
   };

   let newTextMessage = (e) => {
      let textMessage = e.target.value;
      props.newTextMessage(textMessage);
   };
   // let addNewMessage = React.createRef();

   let messages = props.dialogsData.messages.map((m) => <MessageItem message={m.message} />);
   let dialogs = props.dialogsData.users.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);

   return (
      <div className={s.wrapper}>
         <div className={s.wrapper__dialogs}>{dialogs}</div>
         <div className={s.windowMessages}>
            {messages}
            <div className={s.messages__sendMessage}>
               <textarea
                  placeholder="Enter your message..."
                  onChange={newTextMessage}
                  value={props.newMessage}
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
