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
   {  token ? <button className='bg-black text-white'
     onClick={logout}
   >Logout </button> : <Link to="user/login" className="hover:text-pink-600 cursor-pointer"><img className='h-9' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' /></Link>  }           
          </li>
          <li>
            <Link to="" className="hover:text-pink-600 cursor-pointer"><img className='h-8' src='data:image/png;base64,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' /></Link>
          </li>
          <li>
            <Link to="/user/addtocard" className="hover:text-pink-600 cursor-pointer"><img className='h-8' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACUCAMAAADmiEg1AAAAwFBMVEX////t7e3v7+/s7Ozr6+vu7u78/Pzz8/P4+Pj///3t7ukuMD0AAAArMT3///suMD8uNEQ+QkgiKTYxND5hY2keJTQAABcZGy9aXGQACR7W2dssLT9naXDJytHf3+Dt7PBCQVCysrMrMjn19fsAAA8kKT4UESKoqKsiKTAdHCrCxcZQUVshIje8u7+PkJGfoKMYHSQQEx5HR0g1NDaFhYtzdHptbWwSGBkPEiiqqLR6fXzi4eoTGygNCidUVlcfHiG1Chw6AAAQkUlEQVR4nO2di3uiuhLAwzPBSFEotVUL9XGqaH212u3Z7e3+///VnQmiQcSKYrd7vzvfae0mhPwc8piZJBxCJFEVRVFBDEXRmJTONEUxMAPz5QL6ugB86KaUTtcF8EZUSjflAmfVTHZLGyDKntJJRoZ7nZ7ljjOy3EmBs2rOcK8lW3otGe61ZLiTG2W4kwJn1fy/wb29Sk+V3lanXYi7aM3ElISqW2FSOpPSqVxAzSlAcwrIN1LPqpnokqRUJqWnVSaJrABDSk+rbCtG6mGdVbMiPbmvbaLnNDLl/9xfzJ20+n2lLzvlnTzZovyf+1tyW5b1zbg/7ZcVkCsQK5bv0i+P5t5T+ltzKxWFWqDupHS4lj/M/bfO8ymVSd+Upe6kaXplLdZVLJgRSjo+SmWS7vPswbyHpRW1v01i0q3IdyW6aiRlvpvfADaj3twvQWBu9fTduAmZfDzX68/1hx15fv74aBI1QfzT3EY8E2xLT4bzIYqbET96GZnlTbaZmhPu+EafcO9Oeepq2BVi74jjOK3Gkv0hI+FTbu166Hle17NtnhKbA7ff1r8rN1tFMajTkgSUjdzubUC/CbeyG32ZvL/H2E4srfUv7sHvcZMqOXGf5EZHx30yNZNt3OeE8cTsvCxQHiWJQOC7tBxvRL/tOAjTYgCyNkvEpx6GbQBv8feO+Q24DW0jGxPDxKlHzJQ9IeE6ffnInZpzNzCTAmkTY3ujNLdUw2c1C26pQMq4IVSewyWhuxmpBEoGfWjzfLFMF4AetPdG6/RUBqT01CIFUvVr0jctoDIyqmJvjdoqif0JIrob5EA30pi1FaYZRqhpIXav5GJRQDdEBmQbmnS9hT1d+eRhaafFIajGQsHtj+Fxow9nEXVtL64ftUjEH1bZZqhSOtGlAuY6Ha18mhS4RPyEEsHNvSDT4MJeKN/IVJOMXtiTW+g2fdNp4jYdp1bAZjvAbaxlH3du6B1yyJMrwO+ToSCURBoFFE3OkNJzC6yT4GsZ+wd/lFPjEAa5FfOoO76+kLSnOmg+W/M58RMFuGEgxHbi+on8E4u/K5+k7814AoleqaGWyw2DABvcILbnObVYNoZiLS156QcLeNy2u9UJy9f3ae1bMdjknTseGi47GLt4uRm56V00PT3bW0zNjL437fuk8QRnhWYX5kvAdnbrPVe6L10u7M2bmVXJauy8cVBRgzoahVADr9WwpctVpyz1vIy8dA+4W4J7wkrmFrPcRyS43f7N3Q3InSQ3suRl5KUvfsxjfTd+qfncqiRFlpYo/dnAdtKYBbF3fy9Jyu3Py8hLH90PfNS336L5i1pElmIhp9kd6vttSmJDUb6R2duK/BCJlN7LT5+8ob4f24wwsJn3BrtSUsQKtkjnDbkbr6ZqaHGozCLxjwiViekxDpVtbBIRKoN0Iw6VbW0VFf6thIqgZEIjwL00LSZNseWsF1tk4raA239mqgYDvWbKJp2xeaAGldJNbfukNck2tNRtAYWR1SNyv/1LLsBNyP0D+GncfQlVtYImncwN1pyx/klzg/kHhqMKn7psu0Kaghdj1JqR+jtyP00YGMHHch/vVQcfTw63vegXA4szLNOfr3rQ4916cE4cIp9baT85jm03RmYFG2Zp3GZQhXHQ88cX4jaXDcE9K5t70sfxO1rRy3CTaaMF3E9LUiI3+ApkBtzceZ+aheI+R/dL0omQu9Fme7lzJ9u17I1DaOCNkp9z3qo5d7P8ms/jnvhC37daidyGptLrIYY4/M6luJsOcv8zDmhp3IqhU/25i9z15tHcBZeWfj0gd6vepHpY3qIWC9COrbUwUpC/qCXbg4WWljRdpR/g79RadgdmvqviS0uS7lM1Dx49GE988NIUPeU3yM7zGfs4DPbqe7Wa4w4ILieXtn459dGqj37SnQIl7T+pKGD/gHfZggGrVO6l6yL3DAtegNvQMEZoA/eSlclNXyNsJ3cd6yD3Sf48FqhoZrPqgbcFE7K15i60tJSzHyIYu7hK8CNg++JVG7/hdO5K2KsCdst/3nAXmGxzuZt19D0dn1Uuww2ZpGpD+3a7TVIid2eIXuvT2Nob1zyfWzNC4vqgcHc+KpN7sODQ+t6Wn3AfivscXFoy1BAcE7tW4284EBZfWtq3mdkibLnoepzfDEw1t+aT4z6CQQ3NQb9Ws2tvM9O6KmX/iXVl0fZ7t2vz/gjLXWb/oG5ObpC7sWKlcRMd+otnOwudHuY+cZ0EUjW9d//OgTvyKDzgwktL8hrVtp3ob3a3y11uavrBdZK8hR/2eQY1A88G7lb/00Wtz2rYJJqj/wC3F12bhwvICgDT6HOVbR41Bj7CugvctWpIK+etA8Y1h1qFzZCb3y0P1JyRQk0UF5G060bNdpzqxKqEJdjfoVIxV9BOPP44iCNIF/AbkLu3XIC+nZsZKY173AB9241RUe5Cpzro4K5m27XHFakEZ58ngRyFsrnLbc8FZ8c6WHOGu8CUZxE6ueOezZ9uTVY525/H+BYLq7gA4d/q1oa79DiEZamjIXA7bp2qpXAr5n3VhjHKX6kX5aZB3Qdu/hiWxE2WNzb4UHczclWQu0D7tqwwuAZu7vSbNMtdtH0L7tU7cLduOhJ36eelgDtcuTbouz+wMtyFxxNs370PF7h9fyJzlzsOIrcWLiPcMPY4LYeb6h4uDPownBTi3l51zKkly9J7s3fckeevrCC1obYwtya4WdP1sFve6gn3hc5LkUGEsVP3mlbOPi8F3GbHxZ2Jftu47Hkpk9zXcVee+xwQVbJJUvtmpPT0vpmt6VHBxQrc4jx9dxxuD5dg74SHg12K9OROaKJNwd2CBlmRhF1thckZ1jbdktOTrdk/fe7U7OGM4XaOS/kNyB2OgdppeaPjuKX0q910aNDs1XdqvDucXF2SGxxjwm5dB5fVJtvtRYghtQeZj8rtJPUc4i1KzbrLW3Z32Pxc36f78wqFroXRPFzbXQZlyGTscMe2XxgFr3sv9/lxCAXXLHvNletx0He3fr48PDyIhXn/w6yoF+OuqJTcL+u4wxraJN+zP7yoQAfHZ2eDs3NBboORwY+5a2OUnTued/a+E+gnNXx0dn+G3MZh7sL9Uiy7Yx8LrqvQRFqe7Xm7e9pPF7jVS3WUTO9ljifIraIpsVp4Ynv1Rl9bSesxJz0vY1g12Gcj8Enc+LQqBLDX26vElvBWWjZEeek46mfS8a9/+j+3y2uln5cyR1XueQ5uNa2WK29TNTxUc3ZRq8jSUvAitkJ5bn91L1tUJQhZb2LJqXmPHGV/o/0DQ8lv1LU3r4NnQivUgDkytY8DzDdDNcDMS+3jgLnTEHtTsEB67lQp7lWpqLiPI6fm87iFJUHbQ9zsY9dHTFlP1aZkMslzPpVsKVOe20mOjXVJ7uazmCUWMxrq63245lZ/0Dk2O3Z1ySbZHoLEDFnf2rZAWNJ5qaS0miwtYT2DCNwSx61rtAJuK0bYdzo13sjAArvxQdxbK/zlnXMCwv0t8bxUUlqKBgD3bMHBL2ms4MGfZtxc/NxRDvcjcHOMC/5l3DeCe/B9uI9YWkLuPvqv0RLayUmLWvu4Sz4vRTK9Grg7c2zfzjjE0xNCvuN5qSw3OFTIHXXYd+A+cmkJuJVbEV9zP4Kr3aUlwf2NzkvJGSpbDtGlcqJ200xWkOQ5Ur4+Jz3l57M9BQw8UpKHdNo6oG42h7HtGXmjZlzM2lpGVkozeRnm4QIW+xWE1NpmlXBeSlXMaRV35XiOe/Neb6PcSnLd3sq1nCGlt/PSsQD8tP/t0VAlVrrmRE7iRjuPeRHasejxPDVKlzf4r79iWlrfMvdJ50l0g7JRfY7UHNwt2eMqLHsLi5v272mG+9zzUqphjl7mHlQhn5gGFxkEnVsv/uEHRFzpJUUyF8N0PCXqLvf5cQh61Xyugrq9SwmvzsxM+y4h7lNh5rT+2HDF0e5EUirLPv/dxD0Xb/6IeDPbTjbcJ7VvTMcBlgSzV6/O8WUGQ5+7vvMgMbUeHlzX5dvXG4CAvy4+8d/QUlKhCI+LRCe5/nli6tTaU/N5+2bWUzW7H006KAP4mCz9rf5a7ThDlslEThuM8VR+8i3/3bm8aapf8d6tHmPmzONShIQvQ0jevIRk9+wLaV57SavA73k7Eqewk3OjlKk6vcC+x4Q7MSd0Spe+3NQdb3GNW/3lsyVEaq+joevJvcH9PYlrhgLiUIdu6PncqiRnLS0ZvemNG0feMBYllPjY1k1VtkPQ6V9HSWgVXzyxHRQBnE9w8t8YNIdqTj2401/Rg+bdaIEjMD5y10cQ6Gi8umRh4rcnayN4varqH1E8hnuua3fFJ4/qAfj5m0WtQzWn5OStXYZmUHMs4pycL97HY7c/9PB0pvcjYDvc4vwwZYN5rOd5f3xbr867uPmO92fMqCQFDtZcDreqadakKh670//ZNPRg9hvaOqizv9x0GuvKElu4kbunf8yxIXnzj0FgBPcf1Zeu0+K8q9NLxX32c1PyMRfYbyN8j5FKRnUcEr1uPZCuF11LcE/meGzTW7wqcc6qD9yOB1PkidyFvOrNDKaw5gt2R3c4wHRqgPnCsZd6UWeXGzsqm93VatAB6uJ2FqHsOkLHr/FAMvGq0vefbLkNnY26yO0/BzG3SsO2j002mu7jpj/fUd3VgRixLUvrTSJ8hc2TZ34lNx5y4vhekehVlKOKoZgzNND5Yi+3cvuOi1lVGNDFOxl0Gjy4wN16hD77ddwwnnZcwb2KbwQDIxmIA/b79a3XXadV41VIsuKNLMEYuFu1myA0jqk5w31av9TZZIgzjvsq0sHB0oS+ufue4cbAs34d1WqOXQ1jfRO9h5EN3motwt5XvmcYuqHtgG3Cn5uCG2ZoaN+o78e93NoK2rcN4/Va3yqN2/c/Tu/EOPJJ3JrKdDGe8N9TaJ4mhWYyieeV7HgiNsjM3qGZcPdZ7BO0LBaOI9yo1bgmmfb9Ofc5r+IjY1yo94a/kVMNSRPHb487XjPFDSLiJZ074La9+euacrVwcBy8WZHgqJpPPi+FkrJjYb4UXsvi9j7sBdMbX8yHi2VmaSneNPMxFE7k8GUWhL8m9QUu4bZ8TyfWMTWXaH+bY+HfOzy6aXlvN+JP7vab5v5HPfgh9iPw1l2D+30cMqGZ9afmAe4L+Q2jeRcV7qG/hXZprO68Jqq+imESl23dxMEUR3O/mjtk0z6MKYmri40GHAc9t2sFVR9U3Kq1NkXc4cQ8mvtkfz7DDf7OwnY3XgD8ql4HZv7S0mg+x/OKLfEV4ep5Xww91he/r5fCZdPfiQ+DbfvHErSdP+Wx5gceyI3fxeG5jy/3R9ZcLndFBazR9UsU+UARPbq3HRMmQzOXu2IZMw+vBkcniurLJjH/CHfF0EIWjpbXD9Gb2152AsJgdLjK565cseZgNXbfoofVoNkj4p3Ax3KffF5qlzvezEwZ1fHFIjhvmeJVFwfOS8HllOLVgajBIhvuwye1yoj7pLiFKvA0i5R+0Egw4pdvpQ8ffO04KNaoxXkVfKXGkdz4ZiYVN8YV5j5pnSRvaUnYEZnNzDlLS/q6QEZjR9R81nmp/en0s0UtOT3JLVyzrIBi56USlZXysArXnObetp+/6/9P8hdzFzovte/IasJd+DxJoZoz3KfFIf78Po6/hPu/u/xK2t5tu74AAAAASUVORK5CYII=' /></Link>
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
           </ul>
      )}
    </nav>
  );
}

export default Navbar;
