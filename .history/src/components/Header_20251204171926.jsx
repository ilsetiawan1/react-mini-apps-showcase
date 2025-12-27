import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="w-full px-8 bg-blue-950">
      <div className="flex justify-between items-center  w-full h-[50px]">
        {/* Logo */}
        <Link to={'/'}>Lam.jsx</Link>
        {/* Navigation */}
        <div>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
