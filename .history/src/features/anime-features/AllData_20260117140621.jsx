import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllDatas = () => {
  const { allData } = useLoaderData();

  return (
    <div>
      {allData.map((item) => (
        <div key={item.mal_id}>
          <img src={item.images.jpg.image_url} alt="" />
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default AllDatas;
