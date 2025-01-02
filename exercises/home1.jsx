import { useEffect } from "react";
import api from "./../../api/index";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../redux/actionsTypes";
import store from "./../../redux/store";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ActionTypes.REST_LOADING });
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.REST_ERROR, payload: err });
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : error ? (
        <p>Error! {error}</p>
      ) : (
        restaurants.map((i) => <h1>{i.name}</h1>)
      )}
    </div>
  );
};
export default Home;
