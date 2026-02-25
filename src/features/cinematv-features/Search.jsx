import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useRouteLoaderData } from 'react-router-dom';
import ContentCard from './ContentCard';

// Komponen Search
export const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex items-center gap-2 border rounded-lg px-2 sm:w-[300px] md:w-[400px] sm:h-11">
      <IoSearchOutline className="h-6 w-6" />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        className="rounded-lg p-2 outline-none text-xs sm:text-base lg:text-lg w-full"
      />
    </div>
  );
};

// Komponen ResultContent (Tetap tampilkan movie populer)
export const ResultContent = () => {
  const loaderData = useRouteLoaderData('cinematv-root');
  if (!loaderData) return <p className="text-center text-lg py-10">Memuat data...</p>;

  const { topMovies } = loaderData;
  const baseImgUrl = import.meta.env.VITE_TMDB_BASE_IMG_URL;

  return (
    <>
      <h2 className="font-bold text-lg sm:text-xl pt-5 text-slate-700 ml-2">Popular Movies</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {topMovies.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            poster={`${baseImgUrl}${item.poster_path}`}
            rate={item.vote_average}
            date={item.release_date}
            overview={item.overview}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};
