import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import { getRestaurants } from "../../redux/actions/restActions";

const Home2 = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
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

export default Home2;
