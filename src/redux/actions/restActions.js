import ActionTypes from "../actionsTypes";
import api from "./../../api/index";

//!the function that creates array
export const setRestaurant = (payload) => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});

// !Asynchronous Thunk Action
// Unlike synchronous actions, we can send an API request and then send a message to the reducer with dispatch
export const getRestaurants = () => {
  return async (dispatch) => {
    // inform'reducer'
    dispatch({ type: ActionTypes.REST_LOADING });
    // api request
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.REST_ERROR, payload: err });
      });
  };
};
