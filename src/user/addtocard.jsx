import { BsCartPlus } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Cookies from "js-cookie";

function Addtocard() {
 const toNumber = (value) => {
  return parseInt(String(value).replace(/[₹,]/g, "") , 10 || 0);
 }
  
  
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Check login & fetch cart items
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("../user/login");
      return;
    }

    const fetchItems = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await API.get("/cart/item", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchItems();
  }, [navigate]);

  const goToCheckout = () => {
    Cookies.set("cartItems", JSON.stringify(items), { expires: 1 }); // 1 day expiry
    navigate("/checkout");
  };
const decreaseQuantity = (id) => {
  setItems((prevItems) => {
    const updatedCart = prevItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    Cookies.set("cart", JSON.stringify(updatedCart));
    return updatedCart;
  });
};

const increaseQuantity = (id) => {
  setItems((prevItems) => {
    const updatedCart = prevItems.map((item) =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );
    Cookies.set("cart", JSON.stringify(updatedCart));
    return updatedCart;
  });
};
const removeItem = async (item) => {
  const token = localStorage.getItem("token");

  try {
    const res = await API.post(
      '/cart/item/remove',
      { productId: item.productId || item._id }, // match exactly what you store in DB
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert(res.data.message);
     window.location.reload(); 
  } catch (err) {
    console.log(err.response?.data?.message || err.message);
  }
};

  return (
    <>
      <h1 className="flex justify-center mt-7 text-2xl text-red-800 font-bold">
        Welcome to Add to Cart
      </h1>

      <div className="flex flex-col lg:flex-row justify-center mt-3 text-2xl p-4">
        {/* Left Side: Product List */}
        <div className="flex-1 lg:w-[700px] p-4">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border mt-3 p-4"
              >
               <button type="button" onClick={()=>{removeItem(item)}}>x</button>
                <img className="w-24 h-24" src={item.image} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>₹{item.price}</p>
                  <h2>
                    Quantity:
                    <button
                      className="ml-2 mr-2 border bg-pink-900 text-white w-8 h-9"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    {item.quantity || 1}
                    <button
                      className="ml-2 border bg-pink-900 text-white w-8 h-9"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p>No items in cart</p>
          )}
        </div>

        {/* Right Side: Cart Summary */}
        <div className="flex-1 lg:w-[300px] bg-white p-4 ml-3">
          <div className="flex-col w-full shadow-xl border-[1px] border-blue-200 mt-3 p-4 text-black">
            <h2 className="text-xl mb-2">Cart Summary</h2>
            <p>Total Items: {items.length}</p>
            <p>
              Total Price: ₹
              {items.reduce((total, item) => total + item.price * quantity, 0)}
            </p>

            <button
              type="button"
              onClick={goToCheckout}
              className="mt-9 w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
            >
              <BsCartPlus />
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtocard;
