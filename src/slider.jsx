import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://chombooka.com/cdn/shop/files/Summer_collection_baner.png?v=1742545121&width=1500',
    title: 'Welcome to Achiwear',
    subtitle: 'Tailored fashion at your doorstep',
  },
  {
    id: 2,
    image: 'https://chombooka.com/cdn/shop/files/Summer_collection_baner.png?v=1742545121&width=1500',
    title: 'Summer Sale is Live!',
    subtitle: 'Get up to 50% off on select items',
  },
  {
    id: 3,
    image: 'https://chombooka.com/cdn/shop/files/Summer_collection_baner.png?v=1742545121&width=1500',
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
            className="w-full h-full object-cover"
          />
          
        </div>
      ))}
    </div>
  );
}

export default Slider;
