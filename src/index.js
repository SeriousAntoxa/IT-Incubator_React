import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogs = [
    { id: "1", name: "Valera" },
    { id: "2", name: "Nikita" },
    { id: "3", name: "Elena" },
    { id: "4", name: "Maria" },
    { id: "5", name: "Andrei" }
  ];

  const messages = [
    { id: "1", message: "Hello" },
    { id: "2", message: "Why are you?" },
    { id: "3", message: "Thanks, and you?" }
  ];

  const posts = [
    { id: "1", message: "some text post 1", likeCounter: 1 },
    { id: "2", message: "some text post 2", likeCounter: 21 },
    { id: "3", message: "some text post 3", likeCounter: 3 },
    { id: "4", message: "some text post 4", likeCounter: 6 }
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

reportWebVitals();
