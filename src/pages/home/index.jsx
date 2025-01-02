import { useDispatch, useSelector } from "react-redux";
import store from "./../../redux/store";
import restaurantReducer from "./../../redux/reducers/restaurantReducer";
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
    <div className="container">
      <h1 className="font-semibold text-xl md:text-2xl mb-5 ">
        Yakininizdaki Restaurantlar
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {restaurants.map((item) => (
            <Card key={item.id} restaurant={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
