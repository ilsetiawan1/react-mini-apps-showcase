import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='w-full px'>
      <div>
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
