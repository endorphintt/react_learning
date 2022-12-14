import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderPage = (state) => {
    root.render(
        <React.StrictMode>
        <App appState={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

renderPage(store.getState());

store.subscribe(() => {
    let state = store.getState()
    renderPage(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
