import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllData = () => {
  const { allData } = useLoaderData('anime-hub-root');

  if (!data) return <p>Loading data...</p>;

  return (
    <div>
      {allData.map((item) => (
        <div key={item.mal_id}>
          <img src={item.images.jpg.image_url} alt="" />
          <h1>{item.title || item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default AllData;
