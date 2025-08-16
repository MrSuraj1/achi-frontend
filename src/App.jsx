import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect , useState } from 'react';
import Navbar from './Navbar';
import Notice from './notice';
import Home from './Home';
import Slider from './slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './assets/Footer.jsx';
import Login from './user/login.jsx';
import Signup from './user/signup.jsx';
import Addtocard from './user/addtocard.jsx';
import Shop from './componet/Shop.jsx';
import About from './componet/about.jsx';
import Detail from './componet/detail.jsx';
import Checkout from "./user/checkout.jsx";
import Booked from './user/booked.jsx';
import Order from './admin/order.jsx';
import axios from 'axios';





function App() {
const [products, setProducts] = useState([]);

useEffect(() => {
  const apiUrl = import.meta.env.VITE_API_URL; // this should point to Render URL
  console.log(apiUrl); // must log https://achi-backend.onrender.com
 console.log(import.meta.env.VITE_API_URL)
  axios.get(`${apiUrl}/api/product`)
  .then((res) => {
    console.log(res.data);   // ✅ axios gives data directly
    setProducts(res.data);
  })
  .catch((err) => {
    console.error("Error fetching products:", err);
  });
}, []);

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="bod">
        <Notice />
         
     
         <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/Signup" element={<Signup />} />
            <Route path="/user/addtocard" element={<Addtocard/>} />
            <Route path='/componet/Shop' element={<Shop />} />
            <Route path='/componet/about' element={<About />} />
             <Route path='/product/:id' element={<Detail />} />
            <Route path="/checkout" element={<Checkout />} />
             <Route path="/booked" element={<Booked />} />
             <Route path="/admin" element={<Order />} />
            
              </Routes>
       
       <Footer />
      </div>
    </>
  );
}

export default App;
