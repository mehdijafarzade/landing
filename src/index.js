import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { ThemeProvider } from 'react-bootstrap';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ThemeProvider dir='rtl'>
  <BrowserRouter >
    <App />
  </BrowserRouter>
 </ThemeProvider>
 
);

