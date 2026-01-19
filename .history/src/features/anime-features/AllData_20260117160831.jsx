// src\features\anime-features\AllData.jsx
import { useRouteLoaderData } from 'react-router-dom'; // Ganti hook-nya

const AllData = () => {
  // Panggil datanya menggunakan ID yang kita buat di router
  const data = useRouteLoaderData('anime-hub-root');

  // Kasih safety check agar tidak crash saat data belum sampai
  if (!data) return <p>Loading data...</p>;

  const { allData } = data;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">TEst
    </div>
  );
};
