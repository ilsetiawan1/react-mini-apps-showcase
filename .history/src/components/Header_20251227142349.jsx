import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaGithub} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';

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
      className={`w-full sticky top-4 mb-8 rounded-xl z-50 transition-all duration-300
        ${scrolled ? 'bg-white/20 backdrop-blur-xl shadow-md text-white' : 'bg-linear-to-r from-teal-600 to-slate-800 text-white'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold  transition">
          Lam<span className="font-extralight italic">.jsx</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm md:text-lg">
          <Link className="hover:text-amber-400 transition" to="/">
            Home
          </Link>
          <a href="https://github.com/ilsetiawan1?tab=repositories" className="hover:text-amber-400 transition" aria-setsize={}>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/m.ilsetiawan1" className="hover:text-amber-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
