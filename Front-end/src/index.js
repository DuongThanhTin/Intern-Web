import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducers from './reducers/index'

const store=createStore(appReducers)
ReactDOM.render(
    <Provider store = {store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById('HomePage')
  );
 



