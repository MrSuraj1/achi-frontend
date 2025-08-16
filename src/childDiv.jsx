import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import API from "./api";
import Cate from "./user/categori";
function ChildrenProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);



  const toNumber = (value) => {
    return parseInt(String(value).replace(/[₹,]/g, ""), 10) || 0;
  };


  // ✅ Fetch products on page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/product");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        alert("Error fetching products");
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = async (item) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login");
      navigate("/user/login");
      return;
    }

    try {
      await API.post(
        "/cart/item",
        {
          productId: item._id,
          name: item.name,
          price:toNumber(item.price),
          image: item.image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Item added to cart!");
    } catch (error) {
      console.error(error);
      alert("Failed to add item to cart");
    }
  };

  return (
    <div className="px-4 py-10 bg-pink-50">
      <Cate></Cate>
    <br></br>
 <br></br>
      <h2 className="text-3xl font-bold mb-6  text-center">Children Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Link to={`../product/${item._id}`} >  <div className="relative">
                <img
                src={item.image}
                alt={item.name}
                className="h-52 object-cover lg:ml-[50px]"
              />
              <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl">
                <FiHeart />
              </button>
            </div></Link>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-pink-600 font-bold mt-1">₹{toNumber(item.price)}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
              >
                <BsCartPlus />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChildrenProducts;
