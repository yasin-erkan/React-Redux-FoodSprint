const OrderBox = ({ cart }) => {
  // Total number of items in the cart
  const totalAmount = cart.reduce((total, i) => total + i.amount, 0);

  // Total price of items in the cart
  const totalPrice = cart.reduce((total, i) => total + i.amount * i.price, 0);

  return (
    <div className="p-5 rounded-md border h-fit bg-gray-100">
      <h2 className="font-semibold text-xl text-gray-800">Order Details</h2>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Quantity of Items:</span>
        <span className="text-lg font-bold text-blue-600"> {totalAmount}</span>
      </p>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Total Price:</span>
        <span className="text-lg font-bold text-blue-600">
          ${totalPrice.toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default OrderBox;
