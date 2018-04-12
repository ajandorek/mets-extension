import React, { Component } from 'react';
import { todaysGame } from '../helpers/getSched';

export default class Score extends Component {
  componentDidMount() {
    todaysGame().then(res => {});
  }

  render() {
    return <div>This is where the score should go.</div>;
  }
}
