import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Achiwear</h1>
          <p className="text-sm text-gray-400">Cloth Brand | Messho | amazon</p>
        </div>

        {/* Page Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Pages</h2>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">shop</a></li>
            <li><a href="#resume" className="hover:text-blue-400 transition">Contact</a></li>
             <li><a href="user/login" className="hover:text-blue-400 transition">Login</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect</h2>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="https://github.com/MrSuraj1" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="mailto:surajyadavsy271@gmail.com" className="hover:text-yellow-400"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Suraj Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
