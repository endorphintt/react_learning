import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './Redux/state';

export let renderPage = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
        <App appState={state} addPost={addPost}/>
        </React.StrictMode>
    );
}
