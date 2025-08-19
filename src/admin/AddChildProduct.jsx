import { useState } from "react";
import API from "../api";

function AddChild() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    Description: "",
    star: "",
    image: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/product/add", form);
      alert("✅ Product saved successfully");
      console.log(response.data);
    } catch (err) {
      console.error("❌ Error adding product:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Error adding product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex m-20 p-10 flex-col justify-center border-2 rounded-sm"
    >
      <h1 className="text-center text-2xl mt-2 text-blue-950 border-s-blue-300 border-2 p-4">
        Add Product in Child Product
      </h1>

      <label className="mt-4">Product Name</label>
      <input name="name" value={form.name} onChange={handleChange} className="border-2 border-red-600 mt-1" />

      <label className="mt-4">Price</label>
      <input name="price" value={form.price} onChange={handleChange} className="border-2 border-red-600 mt-1" />

      <label className="mt-4">Description</label>
      <textarea name="Description" value={form.Description} onChange={handleChange} className="border-2 border-red-600 mt-1" />

      <label className="mt-4">Star Rating</label>
      <input name="star" value={form.star} onChange={handleChange} className="border-2 border-red-600 mt-1" placeholder="Only number like 4" />

      <label className="mt-4">Image Link (1)</label>
      <input name="image" value={form.image} onChange={handleChange} className="border-2 border-red-600 mt-1" />

      <label className="mt-4">Image Link (2)</label>
      <input name="image1" value={form.image1} onChange={handleChange} className="border-2 border-red-600 mt-1" />

      <label className="mt-4">Image Link (3)</label>
      <input name="image2" value={form.image2} onChange={handleChange} className="border-2 border-red-600 mt-1" />

      <label className="mt-4">Image Link (4)</label>
      <input name="image3" value={form.image3} onChange={handleChange} className="border-2 border-red-600 mt-1" />

      <button type="submit" className="bg-green-950 text-white w-32 p-4 mt-4 hover:bg-red-700">
        Add Product
      </button>
    </form>
  );
}

export default AddChild;
