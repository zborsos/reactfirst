import React from 'react';

class Course extends React.Component {
  render() {
    return (
      <div>
        <div className="coursecontent">
          <h3>{this.props.coursename}</h3>
          <h4> {this.props.status} {this.props.progress}</h4>
        </div>
        <button className="coursecontent">Start exercise</button>
      </div>
    );
  }
}

class Coursebox extends React.Component {
  render() {
    return (
      <div className="box-field">
        <Course coursename="Negotiation" progress="20%" status="Progress" />
        <Course coursename="Frontend" progress="56%" status="Progress" />
        <Course coursename="Food" status="Progress" progress="43%" />
      </div>
    );
  }
}

export default Coursebox;
