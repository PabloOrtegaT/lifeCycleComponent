import React, { Component } from 'react';

class ComponentWillMount extends Component {

    constructor(props){
        console.clear();
        console.log('constructor');
        super(props);
        this.state = { message: 'initial message' };
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount');
    //     this.setState( { message: 'other message' } );
    // } 

    componentWillMount(){
        console.log('componentWillMount');
        this.setState( { message: 'other message' } )
    }

    render () {
        console.log('render');
        return(
            <div>
                <h4> Mounting Cycle: componentWillMount </h4>
                <p> { this.state.message } </p>
            </div>
        );
    }
}

export default ComponentWillMount;