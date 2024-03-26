import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.css'
import './style/null.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


