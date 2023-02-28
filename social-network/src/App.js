import './App.scss';
import React from 'react';
import Header from './components/header/Header';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import DialogsContainer from './components/dialogs/DialogsContainer';
import Profile from './components/profile/Profile';
import Menu from './components/menu/Menu';

function App(props) {
  return (
    <BrowserRouter> 
      <div className="App">
        <Header />
        <Menu />
        <div className="content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />}></Route>
            <Route path='/profile' element={<Profile store={props.store}/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
