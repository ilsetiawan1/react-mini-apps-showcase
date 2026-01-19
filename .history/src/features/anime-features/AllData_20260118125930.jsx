// src\features\anime-features\AllData.jsx
import { useRouteLoaderData } from 'react-router-dom'; // Ganti hook-nya

const AllData = () => {
  const data = useRouteLoaderData('anime-hub-root');

  if (!data) return <p className='text-center py-10'>Memuat data...</p>

  return (
    <div className="">Ini adalah all data
    <h2>Campuran Anime & Karakter</h2>
    {}
    </div>
  );
};

export default AllData;
