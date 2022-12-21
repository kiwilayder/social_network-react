import avatarLena from "../../img/avatarLena.jpg";
import avatarRuslan from "../../img/avatarRuslan.jpg";
import avatarLeha from "../../img/avatarLeha.jpg";
import { renderTree } from "../../render";

let state = {
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
};

export let addPost = () => {
   let newPost = {
      id: 5,
      text: state.postData.newPostText,
      likecount: 0,
   };

   state.postData.post.push(newPost);
   state.postData.newPostText = "";
   renderTree(state);
};

export let updateText = (textPost) => {
   state.postData.newPostText = textPost;
   renderTree(state);
};

export let sendMessage = () => {
   let newMessage = {
      id: 5,
      message: state.dialogsData.newMessage,
   };

   state.dialogsData.messages.push(newMessage);
   state.dialogsData.newMessage = "";
   renderTree(state);
};

export let updateMessage = (textMessage) => {
   state.dialogsData.newMessage = textMessage;
   renderTree(state);
};

export default state;
