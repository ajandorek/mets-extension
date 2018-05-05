import React, { Component } from 'react';
import { todaysGame, todaysStarters } from '../helpers/getSched';
import { BounceLoader, PulseLoader } from 'halogenium';

export default class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 0,
      res: false,
      game: false,
      date: 0,
      time: 0,
      homeTeam: '',
      awayTeam: '',
      pitchers: [],
      location: ''
    };
  }
  componentDidMount() {
    this.gameInfo();
  }

  gameToday() {
    console.log(this.state.pitchers);
    return (
      <div>
        <h2>The Mets Play Today!</h2>
        <p className="teams">
          {this.state.awayTeam} vs. {this.state.homeTeam}
        </p>
        <p>Game Details For {this.state.date}</p>
        <h3>Pitching Matchup</h3>
        {this.state.pitchers.length > 0 ? (
          <p>
            {this.state.pitchers[0].player.LastName} vs. {this.state.pitchers[1].player.LastName}
          </p>
        ) : (
          <PulseLoader color="#002d72" className="loader" />
        )}
        <p>
          <span className="teams">First Pitch:</span>
          {this.state.time}
        </p>
        <p>
          <span>Location:</span> {this.state.location}
        </p>
      </div>
    );
  }

  gameInfo() {
    todaysGame().then(res => {
      this.setState({ res: true });
      if (res.data.dailygameschedule.gameentry) {
        this.setState({
          gameId: res.data.dailygameschedule.gameentry[0].id,
          game: true,
          date: res.data.dailygameschedule.gameentry[0].date,
          time: res.data.dailygameschedule.gameentry[0].time,
          homeTeam: res.data.dailygameschedule.gameentry[0].homeTeam.Abbreviation,
          awayTeam: res.data.dailygameschedule.gameentry[0].awayTeam.Abbreviation,
          location: res.data.dailygameschedule.gameentry[0].location
        });
        if (this.state.game) {
          this.gameStarters(this.state.gameId);
        }
      }
    });
  }

  gameStarters(gameId) {
    todaysStarters(gameId).then(res => {
      const startingPitchers = [];
      const gameInfo = res.data.gamestartinglineup.teamLineup;
      if (gameInfo) {
        gameInfo.filter(obj => {
          obj.expected.starter.filter(a => {
            if (a.position === 'P') {
              startingPitchers.push(a);
            }
          });
        });
        this.setState({ pitchers: startingPitchers });
      }
    });
  }

  noGameToday() {
    return <h3>No Game Today! Come back tomorrow for more Mets baseball :) </h3>;
  }

  render() {
    return this.state.res ? (
      this.state.game ? (
        this.gameToday()
      ) : (
        this.noGameToday()
      )
    ) : (
      <BounceLoader color="#002d72" size="100px" className="loader" />
    );
  }
}
