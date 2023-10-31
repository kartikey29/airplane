import { combineReducers } from "redux";
import { loginState } from "./reducers/index";
const rootReducer = combineReducers({ loginState });

export default rootReducer;
