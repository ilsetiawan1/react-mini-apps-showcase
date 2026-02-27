import React from 'react';
import ContentCard from './ContentCard';
import { useRouteLoaderData } from 'react-router-dom';

const TopMovies = () => {
  const loaderData = useRouteLoaderData('cinematv-root');

  if (!loaderData) return <p className="text-center text-lg py-10">Memuat data...</p>;

  const baseImgUrl = import.meta.env.VITE_TMDB_BASE_IMG_URL;

  const { topMovies = []} = loaderData;

  return (
    <div>
      <h1 className="font-bold text-lg text-center py-5  sm:text-xl pt-5 text-slate-700">20 Best Movies 2026</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {topMovies?.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            poster={`${baseImgUrl}${item.poster_path}`}
            rate={item.vote_average}
            date={item.release_date}
            overview={item.overview}
            // index={index}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
