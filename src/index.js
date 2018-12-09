import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import App from './App';
import rootReducer from './reducers';
import { fetchAllPosts } from './actions/index';

import serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

var pipelined_reqests = []; 

axios.interceptors.request.use(function (config) {
  
  console.log("consoling the pipelined config")
  console.log(pipelined_reqests)

  if(localStorage.getItem("queue_requests") != "true")
  {
    console.log("yes i am request called");
    console.log(config);
  
    // Do something before request is sent
    return config;
  }
  else{
    pipelined_reqests.push(config);
    return false;
  }

}, function (error) {
  console.log("error in request")
  // Do something with request error
  return Promise.reject(error);
});


axios.interceptors.response.use(function (config) {

  let local_requests = pipelined_reqests;
  pipelined_reqests = []

  for (var key  in local_requests) {
    console.log("looping")
    console.log(local_requests[key])
    axios(local_requests[key])
  }

  console.log("yes i am response called");
  console.log(config);

  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// store.dispatch(fetchAllPosts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker();