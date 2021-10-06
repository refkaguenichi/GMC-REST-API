import { combineReducers } from "redux";
import contactReducer from "./contacts";
const rootReducer = combineReducers({ contactReducer });
export default rootReducer;
