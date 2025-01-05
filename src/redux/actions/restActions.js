import api from "../../api";
import ActionTypes from "../actionTypes";

// Synchronous Action Creators
export const setRestaurant = (payload) => ({
  type: ActionTypes.REST_SUCCESS,
  payload,
});

// Asynchronous Thunk Action Creator
export const getRestaurants = () => {
  return async (dispatch) => {
    // Dispatch loading state
    dispatch({ type: ActionTypes.REST_LOADING });

    try {
      // Make API request
      const res = await api.get("/restaurants");

      // Dispatch success with data from the API response
      dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data });
    } catch (err) {
      // Handle error and dispatch failure action
      const errorMessage = err.response
        ? err.response.data.message || err.message
        : "Something went wrong!";
      dispatch({ type: ActionTypes.REST_ERROR, payload: errorMessage });
    }
  };
};
