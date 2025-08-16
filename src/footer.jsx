import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Suraj Kumar</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/MrSuraj1" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition duration-300">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:surajyadavsy271@gmail.com" className="hover:text-blue-400 transition duration-300">
              Email
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition duration-300">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
