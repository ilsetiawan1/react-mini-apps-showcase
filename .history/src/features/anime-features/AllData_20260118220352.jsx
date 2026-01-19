import { useRouteLoaderData } from 'react-router-dom'; 

const AllData = () => {

  const loadaerData = useRouteLoaderData('anime-hub-root');

  if (!loadaerData) return <p className='text-center text-lg py-10'>Memuat data...</p>

  const {topAnimes, topCharacters } = loadaerData;



  return (
    <div className="">
      {/* Popular Anime */}
      <div>
        <h2 className=" font-bold text-lg pt-5">Popular Anime</h2>
        <div className="grid grid-cols-3 sm:gridcol gap-2">
          {topAnimes.slice(0, 9).map((item) => (
            <div key={item.mal_id} className="shadow-2xl p-2 rounded-sm">
              <div className="">
                <img src={item.images.jpg.image_url} alt={item.title} className="rounded-sm" />
                <h1 className="text-xs font-semibold">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Popular Characters */}
      <div>
        <h2 className=" font-bold text-lg pt-5">Popular Characters</h2>
        <div className="grid grid-cols-3 gap-2">
          {topCharacters.slice(0, 9).map((item) => (
            <div key={item.mal_id} className="shadow-2xl p-2 rounded-sm">
              <div className="">
                <img src={item.images.jpg.image_url} alt={item.name} className="rounded-sm" />
                <h1 className="text-xs font-semibold">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllData;
