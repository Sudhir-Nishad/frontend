import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/app.css";
export const server = "https://node-js-backend-5uo2.onrender.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
