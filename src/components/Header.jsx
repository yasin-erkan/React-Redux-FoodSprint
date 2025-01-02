import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";
import restaurantReducer from "./../redux/reducers/restaurantReducer";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurantReducer);
  return (
    <header className="bg-gradient-to-r from-[#a3593c] to-[#b51714] shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container flex flex-col md:flex-row justify-between items-center py-3 md:py-5">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-white font-playfair text-xl md:text-3xl lg:text-4xl font-extrabold tracking-widest mb-3 md:mb-0"
        >
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-md"
          />
          <span className="text-xl md:text-3xl lg:text-4xl font-extrabold">
            FoodSprint
          </span>
        </Link>

        {/* Links and Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Nearby Restaurants Section */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-[#6f4f4f] transition-all duration-300 text-xs md:text-sm lg:text-base"
          >
            Nearby {restaurants.length}
            <IoRestaurant className="text-[#1f0909]" />
            <span className="max-md:hidden"> Restaurants</span>
          </Link>

          {/* Auth Buttons */}
          <button className="button text-xs md:text-sm">Log In</button>
          <button className="button text-xs md:text-sm">Sign Up</button>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="flex items-center gap-3 py-2 px-4 text-white bg-[#6f4f4f] rounded-full hover:bg-[#8f6c6c] transition-all duration-300 text-xs md:text-sm lg:text-base"
          >
            <BsBasket />
            <span>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
