import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Post from './components/new-post';


function App() {
  return (
    <div className='main-wrapper'>
      <Header />
    <div className='app-wrapper'>
      <Navbar />
      <Profile />
      <Post />
    </div>
    </div>
  );
}

export default App;
