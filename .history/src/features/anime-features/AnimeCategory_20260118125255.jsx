import React from 'react'
import { NavLink } from 'react-router-dom'

import AllData from './AllData';


const AnimeCategory = () => {

  return (
    <div className="flex justify-between items-center">
      <NavLink  className={navCategory}>Semua</NavLink>
      <NavLink to="top-anime" className={navCategory}>Top Anime</NavLink>
      <NavLink className={navCategory}>Top Characters</NavLink>
    </div>
  );
}

export default AnimeCategory