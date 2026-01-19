import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';


const AnimeSearch = () => {
  return (
    <div className="flex items-center gap-3 border rounded-lg px-2 ">
      <IoSearchOutline className='h-6 w-6' />
      <input type="text" className="rounded-lg p-2  " />
    </div>
  );
}

export default AnimeSearch