import { combineReducers } from 'redux';
// import BooksReducer from './reducer_books';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  // activeBook: ActiveBook,
});

export default rootReducer;



//Function that returns a piece of the application's state
