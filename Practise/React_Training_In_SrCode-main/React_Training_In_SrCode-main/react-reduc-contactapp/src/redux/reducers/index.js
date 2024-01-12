import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
  users: userReducer,
});

export default rootReducer;
