import React from 'react';
import './App.css';
import Router from './router/index';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import store from '@/redux/store';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default hot(App);