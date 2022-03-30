import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <>
    <BrowserRouter>
    <div className='container-fluid'>
      <App/>
    </div>
 </BrowserRouter>
  </>,
  document.getElementById('root')
);

