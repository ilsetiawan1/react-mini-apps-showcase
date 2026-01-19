// src\features\anime-features\AllData.jsx
import { useRouteLoaderData } from 'react-router-dom'; // Ganti hook-nya

const AllData = () => {
  const data = useRouteLoaderData('anime-hub-root');

  if (!data)

  return (
    <div className="">Ini adalah all data
    </div>
  );
};

export default AllData;
