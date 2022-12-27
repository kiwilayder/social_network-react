import avatarLena from "../../img/avatarLena.jpg";
import avatarRuslan from "../../img/avatarRuslan.jpg";
import avatarLeha from "../../img/avatarLeha.jpg";

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
      if (action.type === "ADD-POST") {
         let newPost = {
            id: 5,
            text: this._state.postData.newPostText,
            likecount: 0,
         };

         this._state.postData.post.push(newPost);
         this._state.postData.newPostText = "";
         this._renderTree(this._state);
      } else if (action.type === "UPDATE-TEXT") {
         this._state.postData.newPostText = action.textPost;
         this._renderTree(this._state);
      } else if (action.type === "SEND-MESSAGE") {
         let newMessage = {
            id: 5,
            message: this._state.dialogsData.newMessage,
         };

         this._state.dialogsData.messages.push(newMessage);
         this._state.dialogsData.newMessage = "";
         this._renderTree(this._state);
      } else if (action.type === "UPDATE-MESSAGE") {
         this._state.dialogsData.newMessage = action.textMessage;
         this._renderTree(this._state);
      }
   },
};

export default store;
