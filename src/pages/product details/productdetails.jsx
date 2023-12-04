import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem, addToCart, resetQuantity } from "../../pages/Redux/cartactions";
// import { toTitleCase } from '../'; // Import your utility function



function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    async function getProductDetails() {
      const response = await axios(`https://fakestoreapi.com/products/${id}`);
      setDetails(response.data);
      dispatch(resetQuantity());
    }

    getProductDetails();
  }, [id]);
  const toTitleCase = (text) => {
    if (text) {
      return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      return "";
    }
  };
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);
  const handleAddItem = () => {
    dispatch(addItem());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };


  const handleAddToCart = () => {
  dispatch(addToCart(Details, quantity));
  const confirmMessage = "Item added to cart!\nDo you want to proceed to the cart?";
  if (window.confirm(confirmMessage)) {
    navigate("/cart");
  }
};
  // const handleAddToCart = () => {
  //   dispatch(addToCart(Details, quantity));
  //   alert("Added to cart!");
  //   navigate("/cart");
  // };


  return (

    <div className="container mx-auto my-8">
      <h1 className="text-4xl text-blue-700 font-bold mb-6">Product Details</h1>
      <div className="flex">
        <div className="flex-grow">
          <img src={Details.image} alt={Details.title} className="max-w-full h-auto rounded-lg" />
        </div>
        <div className="flex flex-col flex-grow ml-6">
          <h1 className="text-3xl font-bold mb-4">{Details.title}</h1>
          <h2 className="text-xl text-gray-700 mb-2">{toTitleCase(Details.category)}</h2>
          <h2 className="text-2xl font-semibold mb-4">${Details.price}</h2>
          {Details.rating && typeof Details.rating === "object" ? (
            <h3 className="text-lg mb-4">
              Rating: {Details.rating.rate} (Based on {Details.rating.count} ratings)
            </h3>
          ) : (
            <div className="text-gray-500">No rating available</div>
          )}
          <div className="flex items-center space-x-4 mb-4">
            <button onClick={handleRemoveItem} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
              -
            </button>
            <h2 className="text-xl font-semibold">{quantity}</h2>
            <button onClick={handleAddItem} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
              +
            </button>
          </div>
          <div className="mb-6">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-full"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-gray-700">{Details.description}</p>
        </div>
      </div>
    </div>



    // <div className="ProductDetails">
    //   <h1>Product Details</h1>
    //   <div className="Details">
    //     <img src={Details.image} alt={Details.title} />
    //     <div className="product-info">
    //       <h1>{Details.title}</h1>
    //       <h2>{toTitleCase(Details.category)}</h2>
    //       <h2>{Details.price}</h2>
    //       {Details.rating && typeof Details.rating === "object" ? (
    //         <h3>
    //           Rating: {Details.rating.rate} (Based on {Details.rating.count}{" "}
    //           ratings)
    //         </h3>
    //       ) : (
    //         <div>No rating available</div>
    //       )}
    //       <div className="product-quant">
    //         <button onClick={handleRemoveItem}>-</button>
    //         <h2>{quantity}</h2>
    //         <button onClick={handleAddItem}>+</button>
    //       </div>
    //       <div className="Cart">
    //         <button onClick={handleAddToCart}>Add to Cart</button>
    //       </div>
    //       <p className="Description">{Details.description}</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductDetails;