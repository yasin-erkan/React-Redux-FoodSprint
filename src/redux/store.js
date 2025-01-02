import {
  applyMiddleware,
  combineReducers,
  createReducer,
} from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import { createStore } from "./../../node_modules/redux/src/createStore";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
  cartReducer,
  restaurantReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
