import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App(props) {
   debugger;
   return (
      <>
         <div className="app-wrapper">
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route path="profile" element={<ProfilePage store={props.store} />} />
                  <Route path="dialogs/*" element={<DialogsContainer store={props.store} />} />
               </Route>
            </Routes>
         </div>
         <Routes>
            <Route path="/profile" element={<Feed postData={props.state.postData} />} />
         </Routes>
      </>
   );
}

export default App;
