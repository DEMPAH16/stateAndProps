import React, { Component } from 'react'
import {connect} from 'react-redux'

class Checkout extends Component {
	constructor(props){
		super(props)
		this.state = {
			backgroundColor: 'pink',
			stuff: 'josh',
			input1:'',
			input2:'',
		}
		this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	changeBackgroundColor(){
		if(this.state.backgroundColor == "pink"){
			this.setState({
				backgroundColor: 'green',
			})
		}else{
			this.setState({
				backgroundColor: 'pink',
			})
		}

	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	render() {
		return (
			<div className="Checkout" style={{background: `${this.state.backgroundColor}`}}>
					Checkout
					<br/>
					<button onClick={this.changeBackgroundColor}>Change My Color</button>
					<br/>
					<input type="text" name="input1" value={this.state.input1} onChange={this.handleChange}/>
					<input type="text" name="input2" value={this.state.input2}  onChange={this.handleChange}/>
					<input type="text" name="backgroundColor" value={this.state.backgroundColor}  onChange={this.handleChange}/>

			</div>
		);
	}
}

export default connect(state=> state )(Checkout);
