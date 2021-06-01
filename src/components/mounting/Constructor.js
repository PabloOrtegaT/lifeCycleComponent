import React, { Component } from 'react';

class Constructor extends Component {

    /* Constructor por defecto
    constructor (...args){
        super(...args);
    }
    */

    constructor(props){
        console.clear();
        console.log('constructor');
        super(props) // este método llama al constructor de Component
        // Inicializamos el state de nuestro componente

        this.state = { initialMessage: 'initial message' };

        // Se bindea el contexto al método
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState( { initialMessage: 'changed message' } );
    }

    render () {
        console.log('render');
        return (
            <div className="App">
                <h4> Mounting Cycle: Constructor</h4>
                {this.state.initialMessage}
                <button onClick = {this.handleClick}>
                    Change Message
                </button>
            </div>
        );
    }
}

export default Constructor;