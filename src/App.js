import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';
import './logo.svg';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import addressReducer from './reducers/form-reducer';
import weatherReducer from './reducers/weather-reducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const allReducers = combineReducers({ address: addressReducer, weather: weatherReducer });
const storeEnhancers = compose(applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension());
const store = createStore(allReducers, {}, storeEnhancers);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<center>
							<Route exact path="/" component={Form} />
							<Route exact path="/result" component={Result} />
						</center>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
