const UPDATE_TEXT = "UPDATE_TEXT";
const ADD_POST = "ADD_POST";

let initialState = {
   post: [
      {
         id: 1,
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         likecount: 2,
      },
   ],
   newPostText: "",
};

const postDataReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_TEXT:
         state.newPostText = action.textPost;

         return state;

      case ADD_POST:
         let newPost = {
            id: 5,
            text: state.newPostText,
            likecount: 0,
         };

         state.post.push(newPost);
         state.newPostText = "";
         return state;

      default:
         return state;
   }
};

export const updateTextActionCreator = (text) => ({ type: UPDATE_TEXT, textPost: text });
export const addPostActionCreator = () => ({ type: ADD_POST });

export default postDataReducer;
