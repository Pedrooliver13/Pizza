import { combineReducers } from "redux";

import { pointsReducer } from "./points/reducer";
import { pizzaReducer } from './pizza/reducer';

export default combineReducers({
  pizzaReducer,
  pointsReducer,
});
