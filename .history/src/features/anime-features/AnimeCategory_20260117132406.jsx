import React from 'react'
import { NavLink } from 'react-router-dom'

const AnimeCategory = () => {

    const navCategory = ({isActive}) => `px-4 py-2 rounded-lg transition-all ${isActive ? 'bg'}`

  return (
    <div className='flex justify-between items-center'>
        <div className='px-4 py-2 bg-slate-300'>Semua</div>
        <div>Top Anime</div>
        <div>Top Reviews</div>
    </div>
  )
}

export default AnimeCategory