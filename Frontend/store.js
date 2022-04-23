import {createStore,combineReducers,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer=combineReducers({
    products:reducer,
})
const enhancer=applyMiddleware(thunkMiddleware)
const store=createStore(rootReducer,enhancer);
export default store;