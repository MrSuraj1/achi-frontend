import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [open, setOpen] = useState(false);

  const [token , setToken] = useState(localStorage.getItem("token"));

  const logout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("emailFind");
    window.location.reload();
  }

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md relative w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-pink-600">Achiwear</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-pink-600 cursor-pointer">Home</Link>
          </li>
          <li>
            <Link to="componet/Shop" className="hover:text-pink-600 cursor-pointer">Shop</Link>
          </li>


         <li class="relative group">
      <button class="hover:text-gray-300 flex items-center">
        Kids
        <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul class="absolute hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg mt-2 w-40">
        <li><a href="/product/fullsalve" class="block px-4 py-2 hover:bg-gray-100">Full selvee</a></li>
        <li><a href="/componet/Shop" class="block px-4 py-2 hover:bg-gray-100">Half Selvee</a></li>
        <li><a href="/componet/Shop" class="block px-4 py-2 hover:bg-gray-100">Year wise</a></li>
      </ul>
    </li>









          <li>
            <Link to="componet/about" className="hover:text-pink-600 cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="https://www.meesho.com/qyysl?_ms=3.0.1" className="hover:text-pink-600 cursor-pointer">Meesho</Link>
          </li>
        </ul>

        {/* right Desktop Menu */}
        <ul className="flex flex-wrap float-left md:flex space-x-3 text-gray-700 font-medium">
          <li>
   {  token ? <button className='bg-black text-white p-1 rounded-lg hover:bg-white hover:text-black'
     onClick={logout}
   >Logout </button> : <Link to="user/login" className="hover:text-pink-600 cursor-pointer"><img className='h-9' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' /></Link>  }           
          </li>
          <li>
           {/* <Link to="" className="hover:text-pink-600 cursor-pointer"><img className='h-8' src='data:image/png;base64,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' /></Link> */}
          </li>
          <li>
            <Link to="/user/addtocard" className="hover:text-pink-600 cursor-pointer"><img className='h-8' src='https://cdn-icons-gif.flaticon.com/6172/6172531.gif' /></Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer float-start" onClick={toggleMenu}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-4 bg-white text-gray-700 font-medium">
         <Link to="/"> <li className="mt-2 hover:text-pink-600">Home</li></Link>
          <Link to="componet/Shop" ><li className="mt-2 hover:text-pink-600">Shop</li></Link> 
          <Link to="componet/about" ><li className="mt-2 hover:text-pink-600">About</li></Link>
         <Link to="https://www.meesho.com/qyysl?_ms=3.0.1" ><li className="mt-2 hover:text-pink-600">Meesho</li></Link>
            
         <li class="relative group">
      <button class="hover:text-gray-300 flex items-center">
        Kids
        <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul class="absolute hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg mt-2 w-40">
        <li><a href="/product/fullsalve" class="block px-4 py-2 hover:bg-gray-100">Full selvee</a></li>
        <li><a href="/componet/Shop" class="block px-4 py-2 hover:bg-gray-100">Half Selvee</a></li>
        <li><a href="/componet/Shop" class="block px-4 py-2 hover:bg-gray-100">Year wise</a></li>
      </ul>
    </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
