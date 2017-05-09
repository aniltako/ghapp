import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';
import clientReducer from './reducers/clientReducer';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
    combineReducers({
    	clientReducer
    }), 
    {}, 
    applyMiddleware(logger(), thunk, promise())
);