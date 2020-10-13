import React, { Component } from 'react'

export class RegComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        console.log('regular component render');
        return(
        <div>
            I'm th regular component. {this.props.name}
        </div>
        );
    }
}

export default RegComp
