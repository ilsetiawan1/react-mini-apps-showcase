import React from 'react'
import { NavLink } from 'react-router-dom'

const navCategory = ({ isActive }) =>
  `px-4 py-2 rounded-lg transition-all text-sm sm:text-xl lg:text-2xl font-medium ${isActive ? 'bg-slate-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-200'}`;

const Category = () => {

  return (
    <div className="sticky top-16 z-40 w-full px-2 sm:px-4 pt-8 sm:pt-12 md:pt-14 pb-4 sm:pb-6 md:pb-8 bg-white/95 backdrop-blur-sm rounded-xl flex justify-between md:justify-around items-center transition-all">
      <NavLink to="." end className={navCategory}>
        Explore
      </NavLink>
      <NavLink to="top-movie" className={navCategory}>
        Top Movies
      </NavLink>
      <NavLink to="top-anime" className={navCategory}>
        Top Animes
      </NavLink>
    </div>
  );
}

export default Category;