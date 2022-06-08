import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import searchReducer from './components/redux/reducers/searchReducer';
import userReducer from './components/redux/reducers/userReducer';

import * as serviceWorker from './serviceWorker';
const rootReducer = combineReducers({
  searchReducer,
  userReducer
});

const store = createStore(rootReducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();
serviceWorker.unregister();
