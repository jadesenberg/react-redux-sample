import { combineReducers } from 'redux';
import BookReducer from './books';
import ActiveBook from './active_book';

const rootReducer = combineReducers({
    books: BookReducer,
    activeBook: ActiveBook
});

export default rootReducer;
