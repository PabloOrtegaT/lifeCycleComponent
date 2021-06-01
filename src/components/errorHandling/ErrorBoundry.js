import React, { Component } from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info){
		console.log('Component Did Catch')
		this.setState({hasError: true})
	}

	render(){
		if (this.state.hasError){
			return <h1>Ooooops. That is not good. Error: {this.state.error.message}</h1>
		} 
		return this.props.children
	}
}

export default ErrorBoundry;