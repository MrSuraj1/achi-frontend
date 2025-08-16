import { Link } from "react-router-dom";
import API from '../api';
import { useState } from "react";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onlogin = async (e) =>{
     e.preventDefault();
    try {if(email === "" || password === "" ){
      alert("enter email and password");
      return;
    }
    const res =  await API.post( 'auth/login' ,
      {email , password});
      alert("login succesfully");
       localStorage.setItem("token", res.data.token);
      localStorage.setItem("emailFind", JSON.stringify(res.data.emailFind));
      window.location.href = "/";
    }
    catch (error) {
      alert(error.response?.data?.message || "login falid");
      console.log(error);
    }
  }

  return (
    <>
      <div className='px-10 py-10 flex justify-center gap-1 bottom-4 border-s-blue-900 bg-slate-200'>
        {/* Left Form Box */}
        <div className='flex flex-wrap justify-center h-[500px] w-[400px] border-2 border-solid rounded-xl bg-sky-200'>
          <form className="bg-white p-6 shadow-md w-full max-w-md rounded-2xl" >
            <h1 className="text-center p-1 mt-1 text-[25px] font-semibold">Log In</h1>
            <h5 className="text-center text-[12px] font-light">Welcome to login for your journey</h5>

            <div className="mt-[60px] px-1">
              <label className="font-semibold block" 
              htmlFor="email"
              >Email</label>
              <input type="email" id="email"
              value={email}
             onChange={(e) => setEmail(e.target.value)}
               className="w-full rounded-md border-[4px] mt-1" />
            </div>

            <div className="mt-[10px] px-1">
              <label className="font-semibold block" htmlFor="password"
              >Password</label>
              <input type="password" id="password" 
              value={password} 
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              className="w-full rounded-md border-[4px] mt-1" />
              <h4 className="text-[11px] font-sans mt-2 text-violet-950">Forgot Password?</h4>
            </div>

            <button className='bg-purple-950 w-full h-9 mt-3 rounded-xl text-white hover:bg-white hover:text-purple-950'
           onClick={onlogin}
            >Login</button>

            <hr />
            <p className="text-xs text-center mt-4">----------------------- Sign in with ----------------------</p>

            <div className="w-full gap-2 mt-3 flex">
              <div className="w-1/2 rounded-md bg-red-600 text-center text-white p-1 hover:bg-white hover:text-red-700 cursor-pointer">Google</div>
              <div className="w-1/2 rounded-md bg-red-600 text-center text-white p-1 ml-1 hover:bg-white hover:text-red-700 cursor-pointer">GitHub</div>
            </div>
            {/* Signup Link */}
            <h4 className="text-center mt-4 text-sm">
              Don't have an account?{" "}
              <Link to="../user/signup" className="text-blue-700 hover:underline">Sign up</Link>
            </h4>
          </form>
        </div>

        {/* Right Image Box */}
        <div className='hidden lg:flex flex-wrap justify-center h-[500px] w-[500px] border-2 border-solid'>
          <img
            className="w-full h-[500px] object-cover"
            src="https://png.pngtree.com/png-vector/20241124/ourlarge/pngtree-a-stylish-woman-carrying-shopping-bags-reflecting-fashion-and-modern-lifestyle-png-image_14558903.png"
            alt="login illustration"
          />
        </div>
      </div>


    </>
  );
}

export default Login;
