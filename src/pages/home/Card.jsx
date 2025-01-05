import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="relative shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition"
    >
      <span className="bg-blue-600 p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white">
        {restaurant.distance} km away
      </span>

      <img
        src={restaurant.photo}
        className="w-full object-cover h-[250px] lg:h-[200px]"
      />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-xl font-semibold text-gray-800">
            {restaurant.name}
          </h3>

          <p className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            {restaurant.rating}
          </p>
        </div>

        <p className="text-sm my-3 text-gray-600">
          {restaurant.minPrice} TL minimum
        </p>

        <div className="flex gap-4 justify-between items-center">
          <p className="flex gap-2 items-center font-semibold">
            <FaClock className="text-red-500" />
            <span className="text-gray-600">
              {restaurant.estimatedDelivery} min.
            </span>
          </p>

          {restaurant.isDeliveryFree && (
            <p className="flex gap-2 items-center font-semibold">
              <MdDeliveryDining className="text-green-500" />
              <span className="text-green-500">Free</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
