import { useSelector, useDispatch } from "react-redux";
import { incAtCart, decAtCart, resetCart } from "../../pages/Redux/cartactions";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddItem = (index) => {
    dispatch(incAtCart(index));
  };

  const handleRemoveItem = (index) => {
    dispatch(decAtCart(index));
  };

  const handleProceed = () => {
    alert(
      "Order Successful! It will be delivered to you as soon as it is dispatched."
    );
    dispatch(resetCart());
    navigate("/products");
  };

  let totalPrice = 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      {cartItems.map((e, index) => {
        const totalProductPrice = e.item.price * e.quantity;
        totalPrice += totalProductPrice;

        return (
          <div key={index} className="cart-item flex items-center border-b py-4">
            <img
              src={e.item.image}
              alt={e.item.title}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div className="item-details">
              <h1 className="text-lg font-semibold">
                {e.item.title} (${e.item.price})
              </h1>
              <h3 className="text-lg">${totalProductPrice}</h3>
              <div className="quantity-controls flex items-center">
                <h2 className="mr-2">{e.quantity}</h2>
                <button
                  onClick={() => handleAddItem(index)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-full mr-2"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <h3 className="text-xl mt-4">
        Total Payable Value:{" "}
        <span className="totalPrice font-bold text-2xl">${totalPrice}</span>
      </h3>

      <button
        className="proceed-button bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full mt-6"
        onClick={handleProceed}
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Cart;





// import { useSelector, useDispatch } from "react-redux";
// import {
//   incAtCart,
//   decAtCart,
//   resetCart,
// } from "../../pages/Redux/cartactions";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const cartItems = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleAddItem = (index) => {
//     dispatch(incAtCart(index));
//   };

//   const handleRemoveItem = (index) => {
//     dispatch(decAtCart(index));
//   };

//   const handleProceed = () => {
//     alert(
//       "Order Successfull! It Will Be Delieverd To You As it will be Dispatch"
//     );
//     dispatch(resetCart());
//     navigate("/products");
//   };
//   let totalPrice = 0;
//   return (
//     <div className="container-full">
//       <h1>CART</h1>

//       {cartItems.map((e, index) => {
//         const totalProductPrice = e.item.price * e.quantity;
//         totalPrice += totalProductPrice;
//         return (
//           <div className="cart-item" key={index}>
//             <img src={e.item.image} alt={e.item.title} />
//             <div className="item-details">
//               <h1>
//                 {e.item.title}(${e.item.price})
//               </h1>

//               <h3>${totalProductPrice}</h3>
//               <div className="quantity-controls">
//                 <h2>{e.quantity}</h2>
//                 <button onClick={() => handleAddItem(index)}>+</button>
//                 <button onClick={() => handleRemoveItem(index)}>-</button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       <h3>
//         The Total Payable Value:{" "}
//         <span className="totalPrice">${totalPrice}</span>
//       </h3>
//       <button className="proceed-button" onClick={handleProceed}>
//         Proceed To Checkout
//       </button>
//     </div>
//   );
// }

// export default Cart;