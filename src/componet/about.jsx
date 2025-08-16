import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">About Us</h1>

        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold text-blue-600">AchiWear</span>, your trusted destination for premium clothing for men, women, and kids. We take pride in delivering quality apparel that’s fashionable, comfortable, and affordable.
        </p>

        <p className="text-lg mb-4">
          Our business was founded and is lovingly run by <span className="font-semibold text-pink-700">Mr. Bhola</span>, a passionate entrepreneur with over 20 years of experience in the textile and tailoring industry.
        </p>

        <p className="text-lg mb-4">
          Our main location is at <span className="font-medium">Gandhi Nagar, Delhi, India</span> — a hub for authentic and reliable clothing businesses. Every piece of clothing is designed or curated with care to meet your expectations.
        </p>

        <p className="text-lg mb-4">
          Thank you for choosing AchiWear. We’re committed to making you look and feel your best!
        </p>

        <p className="text-md text-gray-600 italic">
          ~ Bhola & Team
        </p>
      </div>
    </div>
  );
};

export default About;
