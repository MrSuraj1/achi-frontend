import { useState } from "react";
import API from '../api'



function AddChild(){

const [product , addProduct] = useState("");
const [price , addprice] = useState("");
const [star ,addstar] = useState("");
const [description , addDecription] = useState("");
const [image , addImage] = useState("");
const [image1 , addImage1] = useState("");
const [image2 , addImage2] = useState("");
const [image3 , addImage3] = useState("");

const handle = async () =>{
const sendData = await API.post('/product/add' , {
    product,price,star,description,image,image1,image2,image3
}

 
);
alert("product save");

}

return ( <> 


<form action="" method="post" className="flex m-20  p-10 flex-col justify-center border-2 rounded-sm">
  <h1 className="text-center text-2xl mt-2 text-blue-950 border-s-blue-300 border-2 p-4">Add Product in child product</h1>

<label className="mt-4">ADD Product Name</label>
<input className="border-2 border-red-600 mt-1" 
value={product}

onChange={(e)=>{
addProduct(e.target.value);
}}
></input>
<br></br>

<label >Price</label>
<input 
value={price}
onChange={(e)=>{
    addprice(e.target.value);
}}
className="border-2 border-red-600 mt-1"></input>
<br></br>
<label >Description</label>
<input 
value={description}
onChange={(e)=>{
addDecription(e.target.value);
}}
className="border-2 h-24 border-red-600 mt-1"></input>
<br></br>

<label >star</label>
<input 
value={star}
onChange={(e)=>{
addstar(e.target.value);
}}
className="border-2 border-red-600 mt-1"placeholder="Only number like 4" ></input>
<br></br>

<label >Image Link(1)</label>
<input
value={image}
onChange={(e)=>{
addImage(e.target.value);
}}className="border-2 border-red-600 mt-1"></input>
<br></br>

<label >Image Link(2)</label>
<input 
value={image1}
onChange={(e)=>{
addImage1(e.target.value);
}}
className="border-2 border-red-600 mt-1"></input>
<br></br>


<label >Image Link(3)</label>
<input 
value={image2}
onChange={(e)=>{
addImage2(e.target.value);
}}
className="border-2 border-red-600 mt-1"></input>
<br></br>


<label >Image Link(4)</label>
<input 
value={image3}

onChange={(e)=>{
addImage3(e.target.value);
}}
className="border-2 border-red-800 mt-1"></input>
<br></br>

<button 
onClick={()=>{
    handle();
}}
className="bg-green-950 text-white w-32 p-4 items-center justify-center flex hover:bg-red-700">Add button</button>


</form>

<h3 className="text-center ">Any help -  contact : Suportteam@achiwear.com</h3>


</>)



}


export default AddChild;