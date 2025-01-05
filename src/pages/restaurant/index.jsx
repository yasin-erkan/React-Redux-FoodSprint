import Detail from "./Detail";
import Products from "./Products";

const Restaurant = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Restaurant Detail Section */}
      <div className="shadow-lg mb-8 rounded-lg p-5 bg-white">
        <Detail />
      </div>

      {/* Products Section */}
      <div className="shadow-lg rounded-lg p-5 bg-white">
        <Products />
      </div>
    </div>
  );
};

export default Restaurant;
