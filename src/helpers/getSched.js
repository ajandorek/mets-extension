import axios from 'axios';
import moment from 'moment';

const todaysDate = moment().format('YYYYMMDD');

export const todaysGame = async () => {
  const url = `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/daily_game_schedule.json?fordate=${todaysDate}&team=nym`;
  const res = await axios({
    type: 'GET',
    url: url,
    dataType: 'json',
    async: false,
    headers: {
      Authorization: 'Basic ' + btoa(process.env.REACT_APP_KEY1 + ':' + process.env.REACT_APP_KEY2)
    }
  });

  return res;
};

export const todaysStarters = async gameId => {
  const url = `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/game_startinglineup.json?gameid=${gameId}`;
  const res = await axios({
    type: 'GET',
    url: url,
    dataType: 'json',
    async: false,
    headers: {
      Authorization: 'Basic ' + btoa(process.env.REACT_APP_KEY1 + ':' + process.env.REACT_APP_KEY2)
    }
  });

  return res;
};
