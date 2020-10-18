import React, { Component } from 'react';
import Newsbox from './Newsbox';
import Coursebox from "./Coursebox";

class Dashboardbox extends React.Component {
    render() {
      return (
        <div className="rowC">
          <Coursebox />
          <Newsbox />
        </div>
      );
    }
}

export default Dashboardbox;