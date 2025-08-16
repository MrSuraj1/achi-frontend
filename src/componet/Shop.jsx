import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import API from "../api";

function Shop() {
  const [products, setProducts] = useState([]);     // ✅ साफ नाम
  const [sortOrder, setSortOrder] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");

  // ✅ प्राइस को number में बदलने का सुरक्षित helper
  const toNumber = (value) => {
    return parseInt(String(value).replace(/[₹,]/g, ""), 10) || 0;
  };

  // ✅ पेज लोड पर products fetch
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await API.get("/product"); // baseURL=/api, server=/api/product -> OK
        // res.data ideally array होना चाहिए
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Fetch products error:", error?.response?.data || error);
        alert("Data fetch नहीं हो पाई");
      }
    };
    fetchAll();
  }, []);




  // ✅ फ़िल्टर + सॉर्ट
  const filteredProducts = products
    .filter((item) => {
      const priceNum = toNumber(item.price);
      if (budgetFilter === "500") return priceNum <= 500;
      if (budgetFilter === "1000") return priceNum <= 1000;
      return true;
    })
    .sort((a, b) => {
      const priceA = toNumber(a.price);
      const priceB = toNumber(b.price);
      if (sortOrder === "lowToHigh") return priceA - priceB;
      if (sortOrder === "highToLow") return priceB - priceA;
      return 0;
    });


 const addtocardi = async (item) =>  {
  const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login");
      navigate("/user/login");
      return;
    }
  try{
   await API.post('/cart/item' , {
         productId: item._id,
          name: item.name,
          price: toNumber(item.price),
          image: item.image} , {
            headers : {
              Authorization : `Bearer ${token}`,
            }
          })
          alert("add to acrd succedufll")
 } catch(err){
  console.log('not add');
}
}

const detailPage = (item) =>{
  const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login");
      navigate("/user/login");
      return;
    }
  
    const res = API.get('/detail/page' , {item : item._id});
    
}



    return (
    <main className="p-2 mt-4">
      <div className="w-full bg-white text-center">
        <h1 className="text-red-700 text-2xl font-bold">Shop Your Favorite</h1>
        <p className="font-semibold font-serif mt-2 text-blue-800">
          Trust Me, We Sell Achi Brand Clothes From 20 Years
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full mt-6">
        {/* Filter Sidebar */}
        <div className="md:w-[20%] border-2 p-4 rounded-md bg-white">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          <div>
            <h3 className="font-semibold mb-2">Sort</h3>
            <div className="mb-2">
              <input
                type="radio"
                id="lowToHigh"
                name="sort"
                checked={sortOrder === "lowToHigh"}
                onChange={() => setSortOrder("lowToHigh")}
              />
              <label htmlFor="lowToHigh" className="ml-2">
                Low to High
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="highToLow"
                name="sort"
                checked={sortOrder === "highToLow"}
                onChange={() => setSortOrder("highToLow")}
              />
              <label htmlFor="highToLow" className="ml-2">
                High to Low
              </label>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Budget</h3>
            <div className="mb-2">
              <input
                type="radio"
                id="under500"
                name="budget"
                checked={budgetFilter === "500"}
                onChange={() => setBudgetFilter("500")}
              />
              <label htmlFor="under500" className="ml-2">
                Under ₹500
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="under1000"
                name="budget"
                checked={budgetFilter === "1000"}
                onChange={() => setBudgetFilter("1000")}
              />
              <label htmlFor="under1000" className="ml-2">
                Under ₹1000
              </label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="all"
                name="budget"
                checked={budgetFilter === ""}
                onChange={() => setBudgetFilter("")}
              />
              <label htmlFor="all" className="ml-2">
                All
              </label>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-[80%] p-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <div
                key={item._id || item.id} // ✅ सुरक्षित key
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
        <Link to={`../product/${item._id}`} > <div className="relative flex justify-center mt-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 object-cover"
                  />
                  <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl">
                    <FiHeart />
                  </button>
                </div></Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-pink-600 font-bold mt-1">
                    ₹{toNumber(item.price)}
                  </p>
                
                    <button
                    type="button"
                    onClick={() => addtocardi(item)} 
                    className="mt-3 w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded">
                      <BsCartPlus />
                      Add to Cart
                    </button>
                                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center mt-8 text-red-500 font-semibold">
              No products match your filter.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Shop;
