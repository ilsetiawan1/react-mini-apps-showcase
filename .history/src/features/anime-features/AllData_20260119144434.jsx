import { useRouteLoaderData } from 'react-router-dom';
import AnimeCard from './AnimeCard';

const AllData = () => {
  const loadaerData = useRouteLoaderData('anime-hub-root');

  if (!loaderData || loaderData.topAnimes.length === 0) {
    return <p className="text-center py-10">Memuat data atau API sedang sibuk...</p>;
  }

  const { topAnimes, topCharacters } = loadaerData;

  return (
    <div className="">
      {/* Popular Anime */}
      <div>
        <h2 className=" font-bold text-lg sm:text-xl pt-5 text-slate-700">Popular Anime</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {topAnimes.slice(0, 10).map((item, index) => (
            <AnimeCard key={item.mal_id} item={item} index={index} title={item.title} />
          ))}
        </div>
      </div>
      {/* Popular Characters */}
      <div>
        <h2 className=" font-bold text-lg sm:text-xl pt-5 text-slate-700">Popular Anime</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {topCharacters.slice(0, 10).map((item, index) => (
            <AnimeCard key={item.mal_id} item={item} index={index} title={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllData;
