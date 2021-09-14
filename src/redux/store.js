import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

import {redux-promise-middleware as promiseMiddleware} from "redux";

import {reducer as budgetReducer} from "./budgetReducer"; 

const rootReducer = combineReducers({
    budget: budgetReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))

