import { createStore, combineReducers, applyMiddleware} from "redux";
import {print1Middleware,print2Middleware,print3Middleware,loggerMiddleware} from "./middleware";
import taskReducer from "./tasksReducer";

const middleware = [print1Middleware,print2Middleware,print3Middleware,loggerMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({ tasks: taskReducer });

const todoStore = createStore(rootReducer,middlewareEnhancer);
export default todoStore;
