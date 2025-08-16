import { BsCartPlus } from "react-icons/bs";
import API from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [color , setColor] = useState('choose Colour');  
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/product/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;


  
const paddtocard = async (product) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login");
    navigate("../user/login");
    return;
  }

  try {
    await API.post(
      "/cart/item",
      {
        productId: product._id,
        name: product.name,
        price: parseFloat(product.price.replace(/[₹,]/g, '')),
        image: product.image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("Add to cart successful");
  } catch (err) {
    console.error("Cart add error:", err.response?.data || err.message);
  }
};
 
  const discount = (value) => {
    const a=parseInt(String(value).replace(/[₹,]/g, ""), 10) || 0 ;
    const b=a+(a/100*50);
    
  
  return b;
  };

return (
    <>
      <h1 className="text-2xl text-green-950 p-4 text-center m-5 font-semibold">
      </h1>
      <div className="flex flex-wrap md:flex-auto mt-2 border-pink-100 border-[2px] p-2 ">
        <div className="flex-wrap md:flex-1    float-right p-2" >
          <img
            src={product.image}
            alt={product.name}
            className="w-[340px] md:ml-[170px]"
          />
        </div>
        <div className="flex-wrap md:flex-1 p-2 w-full ml-4">
          <h1>Achi Creation</h1>
          <h2 className="text-2xl font-semibold text-black-500 mt-2">
            {product.name}
          </h2>
          <p className="text-blue-800 mt-3 ">Rating : {product.star}★</p>
                       
                     <p className="text-2xl text-black font-medium mt-2 "><span className="line-through text-xl font-thin mr-2">₹{discount(product.price)}</span> {product.price} <input type="button" value="50% OFF"  className="bg-red-500 p-2 mt-2 rounded-full font-bold text-sm ml-2 text-white"/>
        </p>
            <label className="text-xl mt-2  font-semibold">Size :</label>
            <select name="size" id="size" className="text-xl mt-2 w-14 ml-4 border-[2px]">
              <option>xs</option>
              <option>xl</option>
              <option>c</option>
              <option>x</option>
            </select>
              <br></br>
          <br></br>
          <label htmlFor="colour">Colour :</label>
          <input className="mr-2 ml-2 w-19" value={color}></input>
          <button className="bg-red-600 w-7 ml-2 text-red-600"
          onClick={()=>{
            setColor("red");
          }}
          >.</button>  
           <button
            onClick={()=>{
            setColor("black");
          }}
           className="bg-black w-7 ml-2 text-black-900">.</button>
           <button 
            onClick={()=>{
            setColor("green");
          }}
           className="bg-green-900 ml-2 w-7 text-green-900">.</button>
           <button
            onClick={()=>{
            setColor("blue");
          }}
           className="bg-blue-900 w-7 ml-2 text-blue-900">.</button>
           
     
        <details  className="mt-4" value="size chart">
           <summary>Size chart</summary>
          <img 
          className="w-96 mt-4"
          src="https://i.shgcdn.com/16740b45-1a8c-4179-b129-cde7a895f082/-/format/auto/-/preview/3000x3000/-/quality/lighter/"/></details>
      
   
          <h2 className="mt-4 font-semibold text-red-950 underline">Description :</h2>
          <p className="text-black">{product.Description}</p>


   
          <button
            type="button"
            
            onClick={() => paddtocard(product)}
            className="mt-9 w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
          >
            <BsCartPlus />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Detail;
