import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../api";

function Signup() {


const [name , setName ] = useState("");
const [password , setPassword] = useState("");
const [ email , setEmail ] = useState("");  


const Signupdata = async (e) => {
  e.preventDefault(); 

  if (!name || !password || !email) {
    return alert("Please fill in all fields");
  }

  try {
    await API.post('/auth/signup', { name, password, email });
    alert("You signed up successfully, please log in.");
  } catch (error) {
    alert(error.response?.data?.message || "Signup failed");
    console.log("Error:", error);
  }
};



  return (
    <>
      <div className='px-10 py-10 flex justify-center gap-1 bottom-4 border-s-blue-900 bg-slate-200'>
        {/* Left Form Box */}
        <div className='flex flex-wrap justify-center h-[500px] w-[400px] border-2 border-solid rounded-xl bg-sky-200'>
          <form className="bg-white p-6 shadow-md w-full max-w-md rounded-2xl">
            <h1 className="text-center p-1 mt-1 text-[25px] font-semibold">Signup</h1>
            <h5 className="text-center text-[12px] font-light">Welcome to Signup page for your journey</h5>

            <div className="mt-[60px] px-1">
              <label className="font-semibold block" htmlFor="name"
              >Name</label>
              <input 
              type="name" 
              id="name"
              value={name}
              onChange={e=>{
                setName(e.target.value);
              }
              } 
              className="w-full rounded-md border-[4px] mt-1" />
            </div>
           
            <div className="mt-[10px] px-1">
              <label className="font-semibold block" htmlFor="email">Email</label>
              <input type="email" id="email"
              value={email}
              onChange={e=>{
                setEmail(e.target.value);
                         }}
              className="w-full rounded-md border-[4px] mt-1" />
            </div>



           <div className="mt-[10px] px-1">
              <label className="font-semibold block" htmlFor="password">Password</label>
              <input type="password" id="password" 
              value={password}
              onChange={e=>{
                setPassword(e.target.value);
              }}
              className="w-full rounded-md border-[4px] mt-1" />
              <h4 className="text-[11px] font-sans mt-2 text-violet-950">Forgot Password?</h4>
            </div>

            <button 
            type="button"
            className='bg-purple-950 w-full h-9 mt-3 rounded-xl text-white hover:bg-white hover:text-purple-950'
            onClick={Signupdata}
            >Signup</button>

      {/* Signup Link */}
      <h4 className="text-center mt-4 text-sm">
         have an account?{" "}
        <Link to="../user/login" className="text-blue-700 hover:underline">Log In</Link>
      </h4>
          </form>
        </div>

        {/* Right Image Box */}
        <div className='hidden lg:flex flex-wrap justify-center h-[500px] w-[500px] border-2 border-solid rounded-xl'>
          <img
            className="w-full h-[500px] object-cover rounded-xl"
            src="https://png.pngtree.com/png-vector/20241124/ourlarge/pngtree-a-stylish-woman-carrying-shopping-bags-reflecting-fashion-and-modern-lifestyle-png-image_14558903.png"
            alt="login illustration"
          />
        </div>
      </div>

     
    </>
  );
}

export default Signup;
