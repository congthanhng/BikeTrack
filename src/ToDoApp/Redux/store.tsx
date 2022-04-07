
import taskReducer from "./reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ tasks: taskReducer });
const todoStore = () => {
  return createStore(rootReducer);
};
export default todoStore;
