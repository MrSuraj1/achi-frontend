import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://veirdo.in/cdn/shop/files/1440_550_copy_2_1_0a6c16d1-3c92-4e1a-ac7d-f3ba83e8022f.png?v=1754553159',
    title: 'Welcome to Achiwear',
    subtitle: 'Tailored fashion at your doorstep',
  },
  {
    id: 2,
    image: 'https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=85,fit=cover/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner1-11AUG25.png',
    title: 'Summer Sale is Live!',
    subtitle: 'Get up to 50% off on select items',
  },
  {
    id: 3,
    image: 'https://veirdo.in/cdn/shop/files/1440_550_copy_2_1_0a6c16d1-3c92-4e1a-ac7d-f3ba83e8022f.png?v=1754553159',
    title: 'New Arrivals',
    subtitle: 'Fresh styles to elevate your wardrobe',
  }
];

function Slider() {
  const [current, setCurrent] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="md:w-full md:h-full object-cover w-full h-full"
          />
          
        </div>
      ))}
    </div>
  );
}

export default Slider;
