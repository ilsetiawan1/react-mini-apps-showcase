import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='w-full px-8'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <div>Lam.jsx</div>
        {/* Navigation */}
        <div>
            <Link>About</Link>
            <Link>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
