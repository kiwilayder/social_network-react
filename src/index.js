import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import store from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderTree = (state) => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
         </BrowserRouter>
      </React.StrictMode>
   );
};

renderTree(store.getState());

store.subscribe(renderTree);
