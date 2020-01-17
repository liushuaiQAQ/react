import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	// applyMiddleware(thunk, loggerMiddleware)
	process.env.NODE_ENV === 'development' ? composeEnhancers(applyMiddleware(thunk)) : composeEnhancers(applyMiddleware(thunk))
);
export default store;
