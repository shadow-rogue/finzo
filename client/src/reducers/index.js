import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import ccform from "./ccform";

export default combineReducers( {
    alert,
    auth,
    ccform
});