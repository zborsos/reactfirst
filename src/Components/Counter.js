import React, { Component } from 'react';
import UpdatedComp from './HigherOrder';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }
    IncrementCount = () => {
        this.setState({ count : ++this.state.count });
    }
  render() {
      const { count } = this.state;
    return (
      <div>
          <button onMouseEnter={this.IncrementCount}> {this.props.name} incremented to {count}</button>
      </div>
    );
  }
}

export default UpdatedComp(Counter);
