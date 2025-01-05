import api from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api.get(`/restaurants/${id}`).then((res) => setRestaurant(res.data));
  }, [id]);

  if (!restaurant) return <Loader />;

  return (
    <div className="container mx-auto p-5">
      <div className="flex gap-5 bg-white shadow-lg p-4 rounded-lg">
        <img
          src={restaurant.photo}
          className="w-[150px] h-[150px] rounded-md object-cover"
          alt="Restaurant"
        />

        <div className="flex flex-col justify-between w-full">
          <div className="flex gap-4 text-red-500">
            <p className="flex items-center gap-2">
              <FaArrowDown />
              <span className="text-gray-700">min 30 TL</span>
            </p>
            <p className="flex items-center gap-2">
              <FaClock />
              <span className="text-gray-700">min 30 dak.</span>
            </p>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {restaurant.name}
          </h1>

          <p className="flex items-center gap-2 text-gray-700">
            <FaStar className="text-red-500" />
            <span>{restaurant.rating}</span>

            <button className="text-red-500 font-semibold p-2 rounded hover:bg-red-100 transition duration-300">
              View Reviews
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
