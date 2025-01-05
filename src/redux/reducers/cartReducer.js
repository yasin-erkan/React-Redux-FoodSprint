import ActionTypes from "../actionTypes";

const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.CART_ERROR:
      return { ...state, isLoading: false, error: action.payload, cart: [] }; // Reset cart on error

    case ActionTypes.CART_SUCCESS:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    case ActionTypes.CREATE_ITEM:
      return { ...state, cart: [...state.cart, action.payload] }; // Using spread operator for array

    case ActionTypes.UPDATE_ITEM:
      const updated = state.cart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, cart: updated };

    case ActionTypes.DELETE_ITEM:
      const filtered = state.cart.filter((item) => item.id !== action.payload); // Corrected variable name
      return { ...state, cart: filtered };

    default:
      return state;
  }
};

export default cartReducer;
