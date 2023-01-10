import React from "react";
import { sendMessageActionCreator, updateMessageActionCreator } from "../../Redux/DialogsDataReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
   let state = props.store.getState();

   let addMessage = () => {
      props.store.dispatch(sendMessageActionCreator());
   };

   let newTextMessage = (textMessage) => {
      props.store.dispatch(updateMessageActionCreator(textMessage));
      console.log(textMessage);
   };

   return <Dialogs addMessage={addMessage} newTextMessage={newTextMessage} dialogsData={state.dialogsData} />;
};

export default DialogsContainer;
