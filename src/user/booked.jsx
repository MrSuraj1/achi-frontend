import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Booked() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-white">
      {/* Animated box */}
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 border-4 border-pink-500 rounded-lg animate-bounce"></div>
        <div className="absolute inset-4 border-4 border-dashed border-pink-300 rounded-lg animate-spin-slow"></div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
          alt="Box"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Success icon */}
      <AiOutlineCheckCircle className="text-green-500 text-6xl animate-bounce" />

      {/* Booking message */}
      <h1 className="text-3xl font-bold text-pink-700 mt-4">
        Order Confirmed!
      </h1>
      <p className="text-gray-600 mt-2 text-center px-6">
        Your order is being packed and will be shipped soon.
        <br />
        Thank you for shopping with us! 💖
      </p>

      {/* Back to home button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg shadow-md transition-all"
      >
        Back to Home
      </button>
    </div>
  );
}
