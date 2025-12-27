import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/40 backdrop-blur-xl shadow-md text-slate-900' : 'bg-linear-to-r from-teal-600 to-slate-800 text-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold hover:text-amber-400 transition">
          Lam<span className="font-extralight italic">.jsx</span>
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm md:text-lg">
          <Link className="hover:text-amber-400 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-amber-400 transition" to="/about">
            About
          </Link>
          <Link className="hover:text-amber-400 transition" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
