import React from 'react'
import { NavLink } from 'react-router-dom'

const navCategory = ({ isActive }) =>
  `px-4 py-2 rounded-lg transition-all text-sm sm:text-xl lg:text-2xl font-medium ${isActive ? 'bg-slate-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-200'}`;

const AnimeCategory = () => {

  return (
    <div className="flex justify-between items-center">
      <NavLink to="."  className={navCategory}>Semua</NavLink>
      <NavLink to="top-anime" className={navCategory}>Top Anime</NavLink>
      <NavLink to="top-characters" className={navCategory}>Top Character</NavLink>
    </div>
  );
}

export default AnimeCategory