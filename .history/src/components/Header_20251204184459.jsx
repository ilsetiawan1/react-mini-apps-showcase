// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full  shadow-lg sticky top-0 z-10 px-4 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4 bg-amber-200 rounded-xl">
        {' '}
        {/* Logo */}
        <Link to={'/'} className="text-xl font-bold hover:text-amber-300 transition">
          Lam<span className='font-extralight italic'>.jsx</span>
        </Link>
        {/* Navigation */}
        <div className="flex gap-6 text-sm">
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
