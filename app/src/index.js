import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { Provider } from 'react-redux'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
