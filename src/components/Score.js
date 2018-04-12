import React, { Component } from 'react';
import { todaysGame } from '../helpers/getSched';

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: false,
      date: 0,
      time: 0,
      homeTeam: '',
      awayTeam: '',
      location: ''
    };
  }
  componentDidMount() {
    todaysGame().then(res => {
      if (res.data.dailygameschedule.gameentry) {
        this.setState({
          game: true,
          date: res.data.dailygameschedule.gameentry[0].date,
          time: res.data.dailygameschedule.gameentry[0].time,
          homeTeam: res.data.dailygameschedule.gameentry[0].homeTeam.Abbreviation,
          awayTeam: res.data.dailygameschedule.gameentry[0].awayTeam.Abbreviation,
          location: res.data.dailygameschedule.gameentry[0].location
        });
      }
    });
  }

  render() {
    return <div>This is where the score should go.</div>;
  }
}
