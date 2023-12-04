import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Categories() {
    const [ categories, setCategories ] =useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get("https://fakestoreapi.com/products/categories");
          console.log(response.data);
          setCategories(response.data);
        };
        fetchData();
      }, []);

    return ( 
        <>

        <div className="container mx-auto my-8">
  <h1 className="text-4xl text-blue-800 font-bold mb-8">Categories</h1>
  <div className="m-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-6">
    {categories.map((category, index) => (
      <Link
        key={index}
        to={`/products/${category}`}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        <h3 className="text-xl font-semibold text-blue-800">{category}</h3>
      </Link>
    ))}
  </div>
</div>



        {/* Catagories */}
        {/* <h1>Categories</h1>
        {categories.map((e,i)=>(
        <Link key={i} to={`/products/${e}`}>
            <h3>{e}</h3>
        </Link>
        ))
        } */}
        </>
     );
}

export default Categories;