import React from 'react';
import TopAnime from './TopAnime';
import AnimeSearch from './AnimeSearch';

const AnimeHubApp = () => {
  return (
    <section>
      <div className='flex jus\
      '>
        <h1 className="font-bold text-2xl">Anime Hub</h1>
        <AnimeSearch/>
      </div>
      <TopAnime />
    </section>
  );
};

export default AnimeHubApp;
