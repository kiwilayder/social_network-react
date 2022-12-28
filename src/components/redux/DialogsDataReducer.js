const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsDataReducer = (state, action) => {
   switch (action.type) {
      case UPDATE_MESSAGE:
         state.newMessage = action.textMessage;
         return state;
      case SEND_MESSAGE:
         let newMessage = {
            id: 5,
            message: state.newMessage,
         };

         state.messages.push(newMessage);
         state.newMessage = "";
         return state;

      default:
         return state;
   }
};

export const updateMessageActionCreator = (message) => ({ type: UPDATE_MESSAGE, textMessage: message });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsDataReducer;
