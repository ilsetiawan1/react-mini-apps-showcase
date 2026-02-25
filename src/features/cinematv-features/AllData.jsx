import { useRouteLoaderData } from 'react-router-dom';
import ContentCard from './ContentCard';

const AllData = () => {
  const loadaerData = useRouteLoaderData('cinematv-root');

  if (!loadaerData) return <p className="text-center text-lg py-10">Memuat data...</p>;

  const baseImgUrl = import.meta.env.VITE_TMDB_BASE_IMG_URL;

  const { topMovies, topAnimes } = loadaerData;

  return (
    <div className="">
      {/* Top Movie */}
      <div>
        <h2 className=" font-bold text-lg sm:text-xl pt-5 text-slate-700 ml-2">Popular Movies</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {topMovies.slice(0, 10).map((item, index) => (
            <ContentCard
              key={item.id}
              item={item}
              poster={`${baseImgUrl}${item.poster_path}`}
              rate={item.vote_average}
              date={item.release_date}
              overview={item.overview}
              // index={index}
              title={item.title}
              className={`${index >= 6 ? 'hidden' : 'block'}
                ${index >= 6 && index <= 7 ? 'hidden sm:block' : ''} 
                ${index >= 8 ? 'lg:block' : ''}`}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className=" font-bold text-lg sm:text-xl pt-5 text-slate-700 ml-2">Popular Anime</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {topAnimes.slice(0, 10).map((item, index) => (
            <ContentCard
              key={item.mal_id}
              item={item}
              poster={item.images.jpg.image_url}
              rate={item.score}
              date={item.year}
              overview={item.synopsis}
              // index={index}
              title={item.title}
              className={`${index >= 6 ? 'hidden' : 'block'}
                ${index >= 6 && index <= 7 ? 'hidden sm:block' : ''} 
                ${index >= 8 ? 'lg:block' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllData;
