import React from 'react';
import TopAnime from './TopAnime';
import AnimeSearch from './AnimeSearch';
import AnimeCategory from './AnimeCategory';

const AnimeHubApp = () => {
  return (
    <section>
      <div className='flex justify-between items-center py-5'>
        <h1 className="font-bold text-2xl">Anime Hub</h1>
        <AnimeSearch/>
      </div>
      <div>
        <AnimeCategory/>
      </div>
      <div
    </section>
  );
};

export default AnimeHubApp;
