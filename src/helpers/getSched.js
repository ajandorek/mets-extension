import axios from 'axios';
import moment from 'moment';

const todaysDate = moment().format('YYYYMMDD');
const url = `https://api.mysportsfeeds.com/v1.2/pull/mlb/2018-regular/daily_game_schedule.json?fordate=${todaysDate}&team=nym`;
export const todaysGame = axios.get(url).then(res => {
  console.log(res);
});
