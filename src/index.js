import React from 'react';
import ReactDOM from 'react-dom/client';  // เปลี่ยนจาก 'react-dom' เป็น 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // ใช้ createRoot แทน render
root.render(
  <Router>
    <App />
  </Router>
);
  