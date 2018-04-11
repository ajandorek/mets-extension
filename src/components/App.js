import React, { Component } from 'react';

import Header from './Header';
import Score from './Score';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Score />
      </div>
    );
  }
}
