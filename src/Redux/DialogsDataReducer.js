import avatarLena from "../img/avatarLena.jpg";
import avatarRuslan from "../img/avatarRuslan.jpg";
import avatarLeha from "../img/avatarLeha.jpg";

const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
   users: [
      { id: 1, name: "Lena", avatar: avatarLena },
      { id: 2, name: "Ruslan", avatar: avatarRuslan },
      { id: 3, name: "Leha", avatar: avatarLeha },
      { id: 3, name: "Leha", avatar: avatarLeha },
      { id: 3, name: "Leha", avatar: avatarLeha },
      { id: 3, name: "Leha", avatar: avatarLeha },
      { id: 3, name: "Leha", avatar: avatarLeha },
      { id: 3, name: "Leha", avatar: avatarLeha },
      { id: 3, name: "Leha", avatar: avatarLeha },
      { id: 3, name: "Leha", avatar: avatarLeha },
   ],

   messages: [{ id: 1, message: "YO" }],
   newMessage: "",
};

const dialogsDataReducer = (state = initialState, action) => {
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
