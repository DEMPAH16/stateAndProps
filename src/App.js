import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Cart from './Views/Cart/Cart';
import Details from './Views/Details/Details';
import Checkout from './Views/Checkout/Checkout';
import ProductList from './Views/ProductList/ProductList';


import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route path='/Checkout' component={Checkout}/>
						<Route path='/Cart' component={Cart}/>
						<Route path='/Details/:id' component={Details}/>
						<Route path='/' component={ProductList}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
