import { useRouteLoaderData } from 'react-router-dom';
import { allData } from './AnimeCard';
const AllData = () => {
  const loadaerData = useRouteLoaderData('anime-hub-root');

  if (!loadaerData) return <p className="text-center text-lg py-10">Memuat data...</p>;

  const { topAnimes, topCharacters } = loadaerData;

  return <AnimeCard />;
};

export default AllData;
