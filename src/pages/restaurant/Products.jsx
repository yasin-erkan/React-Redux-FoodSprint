import { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { FaFire } from "react-icons/fa";
import Card from "./Card";
import Error from "../../components/Error";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <Error info={error} />;

  if (!products) return <Loader />;

  if (products.length === 0)
    return (
      <p className="text-center text-gray-500 mt-10">
        The restaurant is currently closed or unavailable for orders.
      </p>
    );

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
        <FaFire className="text-red-500" />
        Popular Products
      </h2>

      <p className="text-gray-600 mt-2 mb-5">
        The most popular items from this restaurant, loved by customers.
      </p>

      <div className="grid lg:grid-cols-2 gap-5 mt-4">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
