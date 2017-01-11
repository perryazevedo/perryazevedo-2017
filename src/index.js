import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path='/' component={App}>

    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('root')
);
