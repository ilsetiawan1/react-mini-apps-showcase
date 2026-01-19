import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopAnime = () => {
  const { populer } = useLoaderData();

  return (
    <div>
      TOP PUPULER ANIME
    </div>
  );
};

export default TopAnime;
