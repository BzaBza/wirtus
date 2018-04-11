import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import WebFont from 'webfontloader';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './main.sass';
import reducer from './redux/reducers';
// import SockJsClient from 'react-stomp';
// import SockJS from "sockjs-client";
// import Stomp from 'react-stomp';

WebFont.load({
  google: {
    families: ['Montserrat' , 'sans-serif']
  }
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>,
 document.getElementById('root'));


// var sock = new SockJS('http://aelmod.sytes.net:8080/ws');
// var stompClient = Stomp.over(sock);
// var thisheaders={
//   Host:'websocket.com'
// };
// sock.onopen = function() {
//   console.log('open');
//   sock.topics=['/topic/public'];
//   sock.send(JSON.stringify({sender: "Username", content: 'kek', type: 'CHAT'}));
// };
//
// sock.onmessage = function(e) {
//   console.log('message', e.data);
//   sock.close();
// };
//
// sock.onclose = function() {
//   console.log('close');
// };

// var socket = new SockJS('http://aelmod.sytes.net:8080/ws');
// var stompClient = Stomp.over(socket);
// var thisheaders={
//   Host:'websocket.com'
// };
// stompClient.connect(thisheaders, function (frame) {
//   setConnected(true);
//   console.log('Connected: ' + frame);
//   stompClient.subscribe('/topic/public', function (greeting) {
//     showGreeting(JSON.parse(greeting.body).content);
//   });
// });
// function SockJsClient(){
//   url='http://aelmod.sytes.net:8080/ws';
//   topics=['/topic/public'];
//   onMessage={(msg) => {
//     console.log(msg);
//   }}
//   ref={(client) => {
//     this.clientRef = client
//   }}
// }
