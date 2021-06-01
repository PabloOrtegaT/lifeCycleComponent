import React, { Component } from 'react';
import ErrorBoundry from './errorHandling/ErrorBoundry';

class Counter extends Component {

    constructor(props){
        console.log('Constructor, setting counter to 0');
        super(props);

        this.state = {
            counter: 0
        }
        
        this.increment = () => this.setState({ counter: this.state.counter+1 });
        this.decrement = () => this.setState({ counter: this.state.counter-1 });
    }

    static getDerivedStateFromProps(props, state){
        if(props.seed && state.seed !== props.seed){
            return{
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }

    componentDidMount(){
        console.log('ComponentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('ComponentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        if(nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp ){
                console.log('ShouldComponentUpdate - IGNORE RENDER')
                return false;
            }
        console.log('ShouldComponentUpdate - RENDER')
        return true;
    }

    componentWillUmount(){
        console.log('ComponentWillUnmount')
    }
    
    componentDidCatch(error, info){
        console.log('ComponentDidCatch');
        this.setState({error, info});
    }

    render(){
        console.log('-> Render counter', this.state.error);

        if(this.props.showErrorComponent && this.state.error){
            return <div>We have encountered an error!</div>
        }

        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
                {this.props.showErrorComponent ? <ErrorBoundry/> : null}
            </div>
        )
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
    }
}

export default Counter;