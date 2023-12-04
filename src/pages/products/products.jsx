import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, } from "react-router-dom";


function Products() {
  const [searchdata, setSearchData] = useState("");
  const [data, setData] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("az");
  const param = useParams();

  if (!param.categories){
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setData(response.data);
      };
      fetchData();
    }, []);

  }
  else {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${param.categories}`);
        console.log(response.data);
        setData(response.data);
      };
      fetchData();
    }, []);
  }

   
  const filteredData = data.filter((product) => {
    return product.title.toLowerCase().includes(searchdata.toLowerCase());
  });


 useEffect(() => {
    let newData = [...data];
    switch (selectedSortOption) {
      case "az":
        newData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        newData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "19":
        newData.sort((a, b) => a.price - b.price);
        break;
      case "91":
        newData.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setData(newData);
  }, [selectedSortOption]);

  const handleSortChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  // const [showDescription, setShowDescription] = useState(false);

  return (
   
      <div className="container mx-auto p-4">
      <h1 className="text-4xl text-blue-800 font-bold mb-8">Shop Our Products</h1>
{/* <div className="flex items-center mb-4 border-b border-b-2 border-blue-500 py-2">
  <input
    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
    type="search"
    placeholder="Search products"
    value={searchdata}
    onChange={(e) => setSearchData(e.target.value)}
  />
  <button
    type="submit"
    className="flex-shrink-0 bg-blue-500 hover:bg-white text-sm text-white hover:text-black py-1 px-2 rounded"
  >
    Search
  </button>
</div> */}


<div className="flex items-center">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-3 py-1 text-blue-700 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    value={searchdata}
    onChange={(e) => setSearchData(e.target.value)}
                />
                <button className="px-3 text-white bg-blue-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>


      <div className="flex justify-end mb-7">
        <div className="w-64">
          <select onChange={handleSortChange} value={selectedSortOption}
            className="block w-full px-4 py-2 border border-blue-400 rounded-lg shadow focus:ring focus:ring-blue-300"
          >
            <option value="az">Sort A-Z</option>
            <option value="za">Sort Z-A</option>
            <option value="19">Sort Low to High</option>
            <option value="91">Sort High to Low</option>
          </select>
        </div>
      </div>
    
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4">
  {filteredData.map((product, id) => (

    // CARD START
    
    <div key={id} className="bg-white shadow-lg rounded-lg p-4  w-auto bg-[#1f2937]">
      <Link to={`/productdetails/${product.id}`}>
        <div className="aspect-w-3 aspect-h-4 rounded-t-lg">
          <img
            
            src={product.image}
            alt={product.title}
            width={200}
        
          />
        </div>
      </Link>
      <div className="p-4 ">
        <Link to={`/productdetails/${product.id}`}>
          <h5 className="text-[16px] font-semibold text-blue-800 mb-2 ">
            {product.title.slice(0,20)}
          </h5>
        </Link>
        <div className="text-black text-xl font-semibold">
            <h3>Price:${product.price}</h3>
        </div>
        
         
      
      </div>
    </div>
    // Card END

  ))}
</div>
    </div>
  
  );
}

export default Products;