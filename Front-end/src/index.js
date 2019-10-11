import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import App from './test/App';
import PageHeader from './components/Element-PageHeader/PageHeader';
import HomePage from './views/HomePage/HomePage'
import SignUp from './components/Element-User-Signup/Element-Signup'

ReactDOM.render(<HomePage />, document.getElementById('HomePage'));

//ReactDOM.render(<PageHeader />, document.getElementById('HomePage'));