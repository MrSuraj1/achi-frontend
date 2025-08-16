import React, { useRef, useEffect, useState } from 'react';

const ScrollFadeIn = ({ children }) => {
  const ref = useRef(); // 1️⃣ DOM element को reference देने के लिए
  const [isVisible, setVisible] = useState(false); // 2️⃣ visible है या नहीं ये check करने के लिए

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true); // 3️⃣ अगर element screen में दिखा, तो visible true
      },
      { threshold: 0.1 } // 10% visible होते ही trigger होगा
    );

    if (ref.current) observer.observe(ref.current); // 4️⃣ observer को element से जोड़ना

    return () => {
      if (ref.current) observer.unobserve(ref.current); // 5️⃣ component unmount पर cleanup
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;
