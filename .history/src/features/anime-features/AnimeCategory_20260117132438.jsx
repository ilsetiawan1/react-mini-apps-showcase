import React from 'react'
import { NavLink } from 'react-router-dom'

const AnimeCategory = () => {

    const navCategory = ({isActive}) => `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-slate-300' : 'text-black'}`

  return (
    <div className='flex justify-between items-center'>
        <NavLink className='px-4 py-2 bg-slate-300'>Semua</NavLink>
        <NavLink>Top Anime</NavLink>
        <NavLink>Top Reviews</NavLink>
    </div>
  )
}

export default AnimeCategory