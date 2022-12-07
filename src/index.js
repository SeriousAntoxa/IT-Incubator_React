import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));

const renderTree = (state) => {

    root.render(
      <React.StrictMode>
        <App state={state} updateTextPost={store.updateTextPost.bind(store)} sendMessage={store.sendMessage.bind(store)} addPost={store.addPost.bind(store)} updateTextMessage={store.updateTextMessage.bind(store)}/>
      </React.StrictMode>
    );

}

renderTree(store.getState())
store.subscribe(renderTree)