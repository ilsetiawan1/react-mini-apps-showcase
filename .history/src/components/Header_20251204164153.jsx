import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div>
        {/* Logo */}
        <div>Lam.jsx</div>
        {/* Navigation */}
        <div>
            <Linik></Linik>
            <Link>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
