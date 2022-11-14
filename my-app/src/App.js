import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Profile from './components/Profile';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Menu />
      <Profile />
    </div>
  )
}

export default App;
