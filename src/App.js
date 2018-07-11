import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as Actions from './Redux/Actions';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.updateName = this.updateName.bind(this);
	}
	updateName() {
		debugger
		this.props.updateProp('steve');
	}
	// updateName() {
	// 	const obj = {
	// 		type: 'abc',
	// 		payload: 'steve'
	// 	}
	// 	this.props.dispatch(obj);
	// }
	render() {
		console.log(this.props)
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">{this.props.firstStateProp}</p>
				<button onClick={this.updateName}>click me</button>
			</div>
		);
	}
}

export default connect(state => state, Actions)(App);
