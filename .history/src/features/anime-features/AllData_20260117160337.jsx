// src\features\anime-features\AllData.jsx
import { useRouteLoaderData } from 'react-router-dom'; // Ganti hook-nya

const AllData = () => {
  // Panggil datanya menggunakan ID yang kita buat di router
  const data = useRouteLoaderData('anime-hub-root');

  // Kasih safety check agar tidak crash saat data belum sampai
  if (!data) return <p>Loading data...</p>;

  const { allData } = data;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {allData.map((item) => (
        <div key={item.mal_id}>
          <img src={item.images.jpg.image_url} alt="" className="rounded-lg shadow" />
          <h1 className="text-sm font-bold mt-2">{item.title || item.name}</h1>
        </div>
      ))}
    </div>
  );
};
