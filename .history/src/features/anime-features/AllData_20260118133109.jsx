import { useRouteLoaderData } from 'react-router-dom'; 

const AllData = () => {
  const data = useRouteLoaderData('anime-hub-root');

  if (!data) return <p className='text-center py-10'>Memuat data...</p>

  return (
    <div className="">
      <div>

    <h2 className=' font-bold text-lg pt-5'>Popular Anime</h2>
    {data.allData.map((item) => (
      <div key={item.mal_id}>
        <h1 >{item.title || item.name}</h1>
      </div>
    ))}
      </div>
    </div>
  );
};

export default AllData;
