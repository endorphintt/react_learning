import './App.scss';
import React from 'react';
import Header from './components/header/Header';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Dialogs from './components/dialogs/Dialogs';
import Profile from './components/profile/Profile';
import Menu from './components/menu/Menu';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <Menu />
        <div className="content">
          <Routes>
            <Route path='/dialogs' element={<Dialogs />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
