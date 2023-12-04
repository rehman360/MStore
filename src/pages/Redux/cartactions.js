const addItem = () => {
    return { type: "ADD_ITEM" };
  };
  const removeItem = () => {
    return { type: "REMOVE_ITEM" };
  };
  const addToCart = (Details, quantity) => {
    return {
      type: "ADD_TO_CART",
      payload: { item: Details, quantity: quantity },
    };
  };
  const resetQuantity = () => {
    return { type: "RESET_QUANTITY" };
  };
  
  const incAtCart = (index) => {
    return { type: "INC_AT_CART", payload: index };
  };
  const decAtCart = (index) => {
    return { type: "DEC_AT_CART", payload: index };
  };
  const resetCart = () => {
    return { type: "RESET_CART" };
  };
  
  export {
    addItem,
    removeItem,
    addToCart,
    resetQuantity,
    incAtCart,
    decAtCart,
    resetCart,
  };
  