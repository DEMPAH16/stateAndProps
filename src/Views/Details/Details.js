import React, { Component } from 'react'
import Reviews from './Reviews/Reviews';
import{connect} from 'react-redux';


const alertStuff = ()=>{
	alert('stuff')
}
class Details extends Component {
	constructor(props){
		super(props)
		this.pushMe = this.pushMe.bind(this);
		this.useDispatch = this.useDispatch.bind(this);
	}

	pushMe(){
		this.props.history.push('/checkout')
	}

	useDispatch(){
		this.props.dispatch({
			type:'abc',
			payload: 'I was updated by dispatch'
		})
	}

	render() {
		console.log(this.props)
		// use of props
		return (
			<div className="Details">
				<h1>Parent to Child</h1>
				<Reviews hope="morestuff" shirt={alertStuff}/>
				<hr/>
				<h1>Router</h1>
				<p>I come from the url <strong> <u>{this.props.match.params.abc}</u></strong> </p>
				<button onClick={this.pushMe}>I use this.props.history.push</button>
				<hr/>
				<h1>Redux</h1>
				<p>{this.props.one}</p>
				<button onClick={this.useDispatch}>I use Dispatch from Redux</button>
			</div>
		);
	}
}

export default connect(state => state)(Details);
