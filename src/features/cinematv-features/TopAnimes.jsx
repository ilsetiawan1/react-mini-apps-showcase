import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import ContentCard from './ContentCard';

const TopAnimes = () => {
  const loaderData = useRouteLoaderData('cinematv-root');
  if (!loaderData) return <p className="text-center text-lg py-10">Memuat data...</p>;

  const { topAnimes } = loaderData;

  return (
    <div>
      <h1 className="font-bold text-lg text-center py-5  sm:text-xl pt-5 text-slate-700">20+ Best Movies 2026</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {topAnimes?.map((item) => (
          <ContentCard
            key={item.mal_id}
            item={item}
            poster={item.images.jpg.image_url}
            rate={item.score}
            date={item.year}
            overview={item.synopsis}
            // index={index}
            title={item.title}
           
          />
        ))}
      </div>
    </div>
  );
};

export default TopAnimes;
