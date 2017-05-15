import { combineReducers } from 'redux';
import BookReducer from './books.js';

const rootReducer = combineReducers({
    books: BookReducer
});

export default rootReducer;
