import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import NewPost from "./components/New-post/New-post";
import Feed from "./components/Feed/Feed";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

function App(props) {
   return (
      <div className="main-wrapper">
         <Header />
         <div className="app-wrapper">
            <Navbar />
            <Routes>
               <Route path="/profile" element={<Profile />} />
            </Routes>
            <Routes>
               <Route
                  path="/profile"
                  element={
                     <NewPost
                        updateText={props.updateText}
                        newPostText={props.state.postData.newPostText}
                        addPost={props.addPost}
                     />
                  }
               />
            </Routes>
            <Routes>
               <Route
                  path="/dialogs/*"
                  element={
                     <Dialogs
                        dialogsData={props.state.dialogsData}
                        updateMessage={props.updateMessage}
                        sendMessage={props.sendMessage}
                     />
                  }
               />
            </Routes>
         </div>
         <div className="posts">
            <Routes>
               <Route path="/profile" element={<Feed postData={props.state.postData} />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
