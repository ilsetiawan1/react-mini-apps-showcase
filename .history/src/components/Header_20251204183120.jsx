// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full  text-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center py-4 bg-blue-950">
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
