import { legacy_createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import toDoReducer from "./reducer/toDoReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
  toDoReducer: toDoReducer,
});

export const combineStore = () => {
  const store = legacy_createStore(reducers);
  return store;
};
