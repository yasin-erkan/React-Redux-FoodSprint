import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  // Function to handle the "add" action, incrementing the product amount by 1
  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };

  // Function to handle the "delete" action, decrementing the product amount by 1,
  // or deleting the product if the amount is 1
  const handleDelete = () => {
    product.amount > 1
      ? dispatch(updateItem(product.id, product.amount - 1))
      : dispatch(deleteItem(product.id));
  };

  return (
    <div className="mb-10 p-4 border rounded flex gap-4 bg-gray-100">
      <img src={product.photo} className="size-[100px] rounded-lg" />

      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-gray-600">
            {product.price}$
          </p>

          <div className="flex items-center border text-xl rounded-lg bg-white">
            {/* Button to decrease the amount or delete the product */}
            <button className="basket-btn" onClick={handleDelete}>
              {product.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>

            <p className="min-w-[30px] text-center text-gray-800">
              {product.amount}
            </p>

            {/* Button to increase the amount */}
            <button className="basket-btn" onClick={handleAdd}>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
