import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

let store;
if (process.env.NODE_ENV === "development") {
  store = legacy_createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = legacy_createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
