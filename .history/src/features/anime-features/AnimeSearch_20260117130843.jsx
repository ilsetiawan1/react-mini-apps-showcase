import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';


const AnimeSearch = () => {
  return (
    <div className="flex items-center gap-3 border rounded-lg ">
      <IoSearchOutline />
      <input type="text" className="border rounded-lg" />
    </div>
  );
}

export default AnimeSearch