// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full shadow-lg sticky top-0 z-10 py-4 my-4 bg-linear-to-r from-teal-600 to-slate-800 text-white rounded-xl">
      <div className="max-w-7xl mx-auto px-4 mdp flex justify-between  items-center">
        {' '}
        {/* Logo */}
        <Link to={'/'} className="text-xl font-bold hover:text-amber-300 transition">
          Lam<span className="font-extralight italic">.jsx</span>
        </Link>
        {/* Navigation */}
        <div className="flex gap-6 text-sm md:text-lg">
          <Link to={'/'} className="hover:text-amber-300 transition">
            Home
          </Link>
          <Link to={'/about'} className="hover:text-amber-300 transition">
            About
          </Link>
          <Link to={'/contact'} className="hover:text-amber-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
