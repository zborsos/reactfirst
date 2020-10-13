import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'I am learning'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'JustLearnd'
            });
        }, 3000);
    }
    render() {
        console.log('Parent component render');
        return (
            <div>
                I'm the parent component.
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp
