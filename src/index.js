import React from 'react';
import ReactDOM from 'react-dom';
import {Router,  hashHistory} from 'react-router'
import Promise from 'promise-polyfill'; 

import 'whatwg-fetch'
import 'material-design-lite/material.css'
import 'material-design-lite/material.js'

import routes from './router'
import './index.css';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}


ReactDOM.render(
  (
    <Router history={hashHistory} routes={routes} />
  ),
  document.getElementById("root")
);
