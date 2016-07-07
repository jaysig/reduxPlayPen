import { combineReducers } from 'redux';
// import BooksReducer from './reducer_books';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  // activeBook: ActiveBook,
});

export default rootReducer;



//Function that returns a piece of the application's state
