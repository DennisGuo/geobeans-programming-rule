import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router from 'react-router/lib/Router'
import hashHistory from 'react-router/lib/hashHistory'
import Promise from 'promise-polyfill';

import store from './store'
import routes from './router'

import 'whatwg-fetch'
import 'material-design-lite/material.css'
import 'material-design-lite/material.js'

import './index.css';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

/**
 * 初始化
 */
ReactDOM.render(
  
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>

  ,
  document.getElementById("root")
);
