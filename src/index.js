import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//import Landing from './components/Landing/Landing'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
