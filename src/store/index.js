import { createStore, applyMiddleware } from "redux";
import Index from "../reducer/index";
import thunk from "redux-thunk";
// import createLogger from "redux-logger";
// const logger = createLogger();

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const middleware = [thunk];

var store = createStore(
  Index,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
