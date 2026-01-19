import { useLoaderData, useRouteLoaderData } from 'react-router-dom'; 

const AllData = () => {

  const loadaerData = useRouteLoaderData('anime-hub-root');

  if (!loadaerData) return <p>Memuat data...;</p>

  const {topAnimes, topCharacters } = useRouteLoaderData('anime-hub-root');



  return (
    <div className="">
      {/* Popular Anime */}
      <div>
        <h2 className=" font-bold text-lg pt-5">Popular Anime</h2>
        {topAnimes.map((item) => (
          <div key={item.mal_id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      {/* Popular Characters */}
      <div>
        <h2 className="font-bold text-lg pt-5">Popular Characters</h2>
        {topCharacters.map((item) => (
          <div key={item.mal_id}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllData;
