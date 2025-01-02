import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="relative shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition"
    >
      <span className="bg-red-500 p-1 px-3 text-sm absolute end-1 top-2 rounded-md text-white">
        {restaurant.distance} km uzakta
      </span>

      <img
        src={restaurant.photo}
        className="w-full object-cover max-h-[250px]"
      />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-xl text-black font-semibold">
            {restaurant.name}
          </h3>

          <p className="flex items-center gap-2 text-red-500">
            <FaStar />
            {restaurant.rating}
          </p>
        </div>

        <p className="text-lg my-3 text-red-950 underline">
          minimum {restaurant.minPrice} $
        </p>

        <div className="flex gap-4 justify-between items-center">
          <p className="flex gap-2 items-center font-semibold">
            <FaClock className="text-red-800" />
            <span className="text-yellow-950">
              {restaurant.estimatedDelivery} dak.
            </span>
          </p>

          {restaurant.isDeliveryFree && (
            <p className="flex gap-2 items-center font-semibold">
              <MdDeliveryDining className="text-red-700" />
              <span>Ücretsiz</span>
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
