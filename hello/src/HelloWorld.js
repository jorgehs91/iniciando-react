import React, { Component } from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component {
    constructor(props) {
        super(props)

        console.log(props, this.props)

        this.state = {
            name: 'Jorge Henrique',
            txt: this.props.txt
        }
    }

    render() {
        return (
            <div className="my-class-from-react">
                <StateInput />
                <h1>{this.state.txt}</h1>
            </div>            
        )
    }
}

export default HelloWorld