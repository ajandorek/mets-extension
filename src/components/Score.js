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

  noGameToday() {
    return <h3>No Game Today! Come back tomorrow for more Mets baseball :) </h3>;
  }

  gameToday() {
    return (
      <div>
        <h3>The Mets Play Today!</h3>
        <p>
          {this.state.awayTeam} vs. {this.state.homeTeam}
        </p>
        <p>Game Details For {this.state.date}</p>
        <p>First Pitch: {this.state.time}</p>
        <p>Location: {this.state.location}</p>
      </div>
    );
  }

  render() {
    return this.state.game ? this.gameToday() : this.noGameToday();
  }
}
