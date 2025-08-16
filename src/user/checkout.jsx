import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import API from "../api";
import { useNavigate } from "react-router-dom";


function Checkout() {
 
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
  });
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch items from cookies
  useEffect(() => {
    const savedCart = Cookies.get("cartItems");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);

      const total = parsedCart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      setTotalPrice(total);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const orderData = {
      ...formData,
      items: cartItems,
      totalAmount: totalPrice,
      paymentMethod: "COD", // You can change to other methods
    };

    try {
      const res = await API.post("/order/place", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(res.data.message || "Order placed successfully!");
  
      Cookies.remove("cartItems"); // clear cart
      window.location.href = "/booked";
      
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded"
        />

        {/* Order Summary */}
        <div className="border-t pt-4">
          <h2 className="font-semibold mb-2">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <p key={index} className="text-gray-700">
                {item.name} × {item.quantity || 1}
              </p>
            ))
          ) : (
            <p className="text-gray-500">No items in cart</p>
          )}
          <p className="font-bold mt-2">Total: ₹{totalPrice}</p>
        </div>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded w-full"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
