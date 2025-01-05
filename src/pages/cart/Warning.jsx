import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      No products are in the cart yet
      <Link to="/" className="border p-2 shadow rounded hover:bg-gray-100">
        Browse Restaurants
      </Link>
    </div>
  );
};

export default Warning;
