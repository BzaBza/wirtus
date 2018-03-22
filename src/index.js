import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './main.sass';
import reducer from './redux/reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
 <Provider store={store}>
  <App/>
 </Provider>,
 document.getElementById('root'));