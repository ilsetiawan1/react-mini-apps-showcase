import React from 'react'
import { NavLink } from 'react-router-dom'

const AnimeCategory = () => {

    const navCategory = ({isActive}) => `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-slate-300' : 'text-black'}`

  return (
    <div className="flex justify-between items-center">
      <NavLink className={navCategory}>Semua</NavLink>
      <NavLink to="top-anime" className={navCategory}>Top Anime</NavLink>
      <NavLink className={navCategory}>Top Charac</NavLink>
    </div>
  );
}

export default AnimeCategory