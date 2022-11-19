import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import {Route, Routes, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Menu />
        <div className="app__content">
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/music' element={<Music />}/> 
            <Route path='/news' element={<News />}/> 
            <Route path='/settings' element={<Settings />}/>            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
