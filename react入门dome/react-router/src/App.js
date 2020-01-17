import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './view/Login';
import Layout from './view/layout';


function App() {
	return (
		<Provider store={store}>
			<Switch>
				<Route path="/login" component={Login}></Route>
				<Route path="/" component={Layout}></Route>
			</Switch>
		</Provider>
	);
}

export default App;
