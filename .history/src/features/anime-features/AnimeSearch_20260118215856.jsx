import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';


const AnimeSearch = () => {
  return (
    <div className="flex items-center gap-2 border rounded-lg px-2 sm:">
      <IoSearchOutline className='h-6 w-6' />
      <input type="text" className="rounded-lg p-2  outline-none text-xs" />
    </div>
  );
}

export default AnimeSearch