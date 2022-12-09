import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));

const renderTree = (state) => {

    root.render(
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
    );

}

renderTree(store.getState())
store.subscribe(renderTree)