import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const { cart } = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();

  // Check if the product is already in the cart
  const found = cart?.find((cartItem) => cartItem.id === product.id);

  // Function to handle adding the product to the cart
  const handleAdd = () => {
    found
      ? // If the product is already in the cart, increase the quantity
        dispatch(updateItem(found.id, found.amount + 1))
      : // If the product is not in the cart, add it
        dispatch(createItem(product));
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border rounded-lg shadow-lg p-4 hover:bg-gray-100 hover:scale-105 cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            {product.title}
          </h1>
          <p className="text-sm text-gray-500 my-1">{product.desc}</p>
        </div>

        <p className="text-lg font-semibold text-red-500">{product.price}$</p>
      </div>

      <div className="relative">
        <img
          src={product.photo}
          className="rounded-md object-cover w-full h-[180px]"
        />

        <button
          className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 p-2 shadow-md text-gray-800 font-bold"
          onClick={handleAdd}
        >
          {found ? found.amount : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default Card;
