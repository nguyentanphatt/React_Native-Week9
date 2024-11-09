// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducer'; // Ensure the path to reducer is correct

// Create store with reducer and thunk middleware
const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;