import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { getRestaurants } from "../../redux/actions/restActions";
import Card from "./Card";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch();
  const retry = () => dispatch(getRestaurants());

  return (
    <div className="container p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="font-semibold text-xl md:text-2xl text-gray-800 mb-5">
        Nearby Restaurants
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {restaurants.map((item) => (
            <Card key={item.id} restaurant={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
