import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import enrollmentReducer from "./enrollmentReducer";

const rootReducer = combineReducers({
  accountReducer,
  enrollmentReducer,
});

export default rootReducer;
