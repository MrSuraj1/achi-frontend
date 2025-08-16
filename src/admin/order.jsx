import React, { useEffect, useState } from "react";
import API from "../api"; // Your Axios instance

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/order/get"); // Directly call API
      setOrders(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="border p-4 rounded-lg shadow-sm bg-white mb-4"
          >
            <p className="font-semibold">
              Order ID: <span className="text-gray-600">{order._id}</span>
            </p>
            <p>Name: {order.name}</p>
            <p>Address: {order.address}</p>
            <p>Phone: {order.phone}</p>
            <p>Payment Method: {order.paymentMethod}</p>
            <p>Total Amount: ₹{order.totalAmount}</p>

            <div className="mt-2">
              <p className="font-semibold">Items:</p>
              <ul className="list-disc list-inside">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} × {item.quantity} — ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Placed on: {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Order;
