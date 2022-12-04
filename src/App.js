import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import NewPost from './components/New-post/New-post';
import Feed from './components/Feed/Feed';



function App() {
  return (
    <div className='main-wrapper'>
      <Header />
    <div className='app-wrapper'>
      <Navbar />
      <Profile />
      <NewPost />
    </div>
    <div className='posts'>
      <Feed />
    </div>
    </div>
  );
}

export default App;
