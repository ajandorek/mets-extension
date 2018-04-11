import axios from 'axios';
import moment from 'moment';

const todaysDate = moment().format('YYYYMMDD');
const url = `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/daily_game_schedule.json?fordate=${todaysDate}&team=nym`;
export const todaysGame = axios
  .get({
    baseURL: url,
    timeout: 1000,
    headers: {
      Authorization: 'Basic ' + btoa(process.env.REACT_APP_KEY1 + ':' + process.env.REACT_APP_KEY2)
    }
  })
  .then(res => {
    console.log(res);
  });
