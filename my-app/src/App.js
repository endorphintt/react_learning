import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Menu />
        <div className="app__content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
            <Route path='/profile' element={<Profile store={props.store}/>}/>
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