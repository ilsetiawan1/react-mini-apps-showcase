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
            <Link>Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
