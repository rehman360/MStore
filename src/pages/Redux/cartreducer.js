const initialState = {
    quantity: 0,
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, quantity: state.quantity + 1 };
      case "REMOVE_ITEM":
        return {
          ...state,
          quantity: state.quantity > 0 ? state.quantity - 1 : 0,
        };
      case "ADD_TO_CART":
        const updatedCart = [...state.cart, action.payload];
  
        return { ...state, cart: updatedCart };
      case "RESET_QUANTITY":
        return { ...state, quantity: 0 };
      case "INC_AT_CART":
        const incCart = state.cart.map((item, index) => {
          if (index === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, cart: incCart };
  
      case "DEC_AT_CART":
        const decCart = state.cart.map((item, index) => {
          if (index === action.payload && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return { ...state, cart: decCart };
      case "RESET_CART":
        return { ...state, cart: [] };
      default:
        return state;
    }
  };
  export default cartReducer;
  