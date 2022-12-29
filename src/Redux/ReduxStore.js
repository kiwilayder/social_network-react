import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsDataReducer from "./DialogsDataReducer";
import postDataReducer from "./PostDataReducer";

let reducers = combineReducers({
   dialogsData: dialogsDataReducer,
   postData: postDataReducer,
});

let store = createStore(reducers);

export default store;
