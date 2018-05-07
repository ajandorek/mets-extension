import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import Header from './Header';
import Score from './Score';
export default class App extends Component {
  render() {
    return (
      <FadeIn>
        <Header />
        <Score />
      </FadeIn>
    );
  }
}
