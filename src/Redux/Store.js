import avatarLena from "../img/avatarLena.jpg";
import avatarRuslan from "../img/avatarRuslan.jpg";
import avatarLeha from "../img/avatarLeha.jpg";
import postDataReducer from "./PostDataReducer";
import dialogsDataReducer from "./DialogsDataReducer";

let store = {
   _state: {
      dialogsData: {
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
      },

      postData: {
         post: [
            {
               id: 1,
               text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
               likecount: 2,
            },
         ],
         newPostText: "",
      },
   },

   getState() {
      return this._state;
   },

   _renderTree() {},

   subscribe(observer) {
      this._renderTree = observer;
   },

   dispatch(action) {
      this._state.postData = postDataReducer(this._state.postData, action);
      this._state.dialogsData = dialogsDataReducer(this._state.dialogsData, action);

      this._renderTree(this._state);
   },
};

export default store;
