import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import NewPost from "./components/New-post/New-post";
import Feed from "./components/Feed/Feed";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return (
      <BrowserRouter>
         <div className="main-wrapper">
            <Header />
            <div className="app-wrapper">
               <Navbar />
               <Routes>
                  <Route path="/profile" element={<Profile />} />
               </Routes>
               <Routes>
                  <Route path="/profile" element={<NewPost />} />
               </Routes>
               <Routes>
                  <Route path="/dialogs" element={<Dialogs />} />
               </Routes>
            </div>
            <div className="posts">
               <Routes>
                  <Route path="/profile" element={<Feed />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
