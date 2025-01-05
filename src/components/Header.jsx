import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((store) => store.cartReducer);
  const { restaurants } = useSelector((store) => store.restaurantReducer);

  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container flex justify-between items-center py-4">
        {/* Logo and Title */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-[900] text-2xl font-mono md:text-3xl"
        >
          <img
            src="/assets/logo.webp"
            alt="FoodSprint Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>FoodSprint</span>
        </Link>

        {/* Links and Cart */}
        <div className="flex gap-5 items-center">
          <Link
            to="/"
            className="text-white hover:text-red-500 transition duration-200"
          >
            Nearby {restaurants.length}{" "}
            <IoRestaurant className="inline text-red-500" />
            <span className="md:hidden"> Restaurants</span>
          </Link>

          <button className="text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-600 transition duration-200">
            Login
          </button>
          <button className="text-white bg-gray-700 py-2 px-4 rounded-full hover:bg-gray-600 transition duration-200">
            Sign Up
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-2 py-2 px-3 hover:bg-red-100 transition rounded-full"
          >
            <BsBasket className="text-white" />
            <span className="text-white">{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
