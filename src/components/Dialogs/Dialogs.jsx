import React from "react";
import s from "./Dialogs.module.css";
import Message_item from "./Message_item/Message_item";
import Dialog_item from "./Dialog_item/Dialog_item";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../Redux/DialogsDataReducer";

const Dialogs = (props) => {
   // let addNewMessage = React.createRef();

   let addMessage = () => {
      props.dispatch(sendMessageActionCreator());
   };

   let newTextMessage = (e) => {
      let textMessage = e.target.value;
      props.dispatch(updateMessageActionCreator(textMessage));
   };

   let messages = props.dialogsData.messages.map((m) => <Message_item message={m.message} />);
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
                  placeholder="Enter your message..."
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
