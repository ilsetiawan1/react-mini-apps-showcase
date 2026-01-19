import React from 'react';
import TopAnime from './TopAnime';
import AnimeSearch from './AnimeSearch';
import AnimeCategory from './AnimeCategory';
import { Outlet } from 'react-router-dom';

const AnimeHubApp = () => {
  return (
    <section>
      <div className='flex justify-between items-center py-5'>
        <h1 className="font-bold text-lg sm:text-2xl md:text-3xl">Anime Hub</h1>
        <AnimeSearch/>
      </div>
      <div>
        <AnimeCategory/>
      </div>
      {/*  */}
      <div>
        <Outlet/>
      </div>
    </section>
  );
};

export default AnimeHubApp;
