import { localItem, removeLocalItem } from "../utils/tool";
import { combineReducers } from "redux";

const initState = localItem("user") ? JSON.parse(localItem("user")) : {};
const user = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // localItem("user", JSON.stringify(action.target));
      // return action.target;
      return state;
    case "LOGOUT":
      removeLocalItem("user");
      return null;
    default:
      console.log(state, "state");
      return state;
  }
};

const Index = combineReducers({ user });

export default Index;
