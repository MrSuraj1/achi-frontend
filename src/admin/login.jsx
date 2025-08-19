function LoginAdmin(){

    return (<>
    <div className="w-full p-12 flex flex-col justify-center items-center  bg-slate-300">  
  <div className="flex flex-col justify-center items-center m-auto rounded-lg p-14 bg-white">
    
    <h1 className="text-2xl text-red-500"> Login - Admin </h1>
    <label htmlfor="no" className="mt-4 text-xl text-blue-500 ">Email</label>
    <input type="text" className="p-1 mt-2 rounded-md border-2" placeholder="Enter email"></input>
    
    <label htmlfor="no" className="mt-4 text-xl text-blue-500 ">Password</label>
    <input type="text" className="p-1 mt-2 rounded-md border-[4px] " placeholder="password"></input>
      
   <button className="mt-5 border-[2px] rounded-lg p-4 text-black hover:text-white hover:bg-black" >Login</button>

   </div>
</div>

    
    
    </>)


}

export default LoginAdmin;