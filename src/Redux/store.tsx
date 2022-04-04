
import taskReducer from "./reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ tasks: taskReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
