import ActionTypes from "../actionTypes";
import api from "../../api/index";

// Asynchronous Thunk Action

// Fetch cart items from the API and notify the reducer
export const getBasket = () => async (dispatch) => {
  dispatch({ type: ActionTypes.CART_LOADING });

  try {
    const res = await api.get("/cart");
    dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ActionTypes.CART_ERROR, payload: err.message });
    alert(`Error: ${err.message}`);
  }
};

// Add a new item to the cart through the API and notify the reducer
export const createItem = (product) => async (dispatch) => {
  const newItem = {
    id: product.id,
    category: product.category,
    title: product.title,
    price: product.price,
    photo: product.photo,
    amount: 1,
  };

  try {
    await api.post("/cart", newItem);
    dispatch({ type: ActionTypes.CREATE_ITEM, payload: newItem });
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
};

// Update the quantity of an item in the cart and notify the reducer
export const updateItem = (id, newAmount) => async (dispatch) => {
  try {
    const res = await api.patch(`/cart/${id}`, { amount: newAmount });
    dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data });
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
};

// Delete an item from the cart and notify the reducer
export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.delete(`/cart/${id}`);
    dispatch({ type: ActionTypes.DELETE_ITEM, payload: id });
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
};
