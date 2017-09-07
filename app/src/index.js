import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { Provider } from 'react-redux'
import AppContainer from 'containers/AppContainer'

const middleware = [ thunk ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
