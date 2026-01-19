import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';


const AnimeSearch = () => {
  return (
    <div className="flex items-center gap-2 border rounded-lg px-2 sm:w-[300px] md:w-[400px] sm:h-11">
      <IoSearchOutline className='h-6 w-6' />
      <input type="text" className="rounded-lg p-2  outline-none text-xs sm:text-base flex items-center" />
    </div>
  );
}

export default AnimeSearch