import React, { Component } from 'react'

class Reviews extends Component {
    constructor(props){
        //everything in the contructor can use props.
        super(props)
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(){
         this.props.shirt();
    }


	render() {
        //everything in the return can use props/
		return (
            <div className="Reviews">
            <button onClick={this.clickMe}>I use Parents Props</button>
			</div>
		);
	}
}

export default Reviews;