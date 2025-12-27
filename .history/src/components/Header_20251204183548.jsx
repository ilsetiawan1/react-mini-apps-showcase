// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full  text-sky-500 shadow-lg sticky top-0 z-10 px-4 py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4 bg-slate-800 rounded-xl">
        {' '}
        {/* Logo */}
        <Link to={'/'} className="text-2xl font-bold hover:text-amber-300 transition">
          Lam.jsx
        </Link>
        {/* Navigation */}
        <div className="flex gap-6 text-base">
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
