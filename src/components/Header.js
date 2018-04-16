import React, { Component } from 'react';
import logo from '../images/metslogo.png';

export default class Header extends Component {
  render() {
    return (
      <h1>
        Do the <img className="metsLogo" alt="mets logo" src={logo} /> play today?
      </h1>
    );
  }
}
