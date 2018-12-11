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



// store.dispatch(fetchAllPosts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker();