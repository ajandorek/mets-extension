import React, { Component } from 'react';
// import { todaysGame } from '../helpers/getSched';
import axios from 'axios';
import moment from 'moment';

export default class Score extends Component {
  componentDidMount() {
    const todaysDate = moment().format('YYYYMMDD');
    const url = `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/daily_game_schedule.json?fordate=${todaysDate}&team=nym`;
    axios({
      type: 'GET',
      url: url,
      dataType: 'json',
      async: false,
      headers: {
        Authorization:
          'Basic ' + btoa(process.env.REACT_APP_KEY1 + ':' + process.env.REACT_APP_KEY2)
      }
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    console.log(btoa(process.env.REACT_APP_KEY1 + ':' + process.env.REACT_APP_KEY2));
    return <div>This is where the score should go.</div>;
  }
}
