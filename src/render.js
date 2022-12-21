import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { addPost } from "./components/redux/state";
import { updateText } from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderTree = (state) => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} addPost={addPost} updateText={updateText} />
         </BrowserRouter>
      </React.StrictMode>
   );
};
