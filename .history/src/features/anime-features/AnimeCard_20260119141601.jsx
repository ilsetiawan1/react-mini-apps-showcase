export const AnimeA = () => {
      const loadaerData = useRouteLoaderData('anime-hub-root');
    
      if (!loadaerData) return <p className="text-center text-lg py-10">Memuat data...</p>;
    
      const { topAnimes, topCharacters } = loadaerData;
      return (
        <div className="">
          {/* Popular Anime */}
          <div>
            <h2 className=" font-bold text-lg sm:text-xl pt-5 text-slate-700">Popular Anime</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
              {topAnimes.slice(0, 10).map((item, index) => (
                <div
                  key={item.mal_id}
                  className={`group shadow-lg hover:shadow-2xl p-2 rounded-md bg-white transition-all duration-300
                ${index >= 6 ? 'hidden' : 'block'}
                ${index >= 6 && index <= 7 ? 'hidden sm:block' : ''} 
                ${index >= 8 ? 'lg:block' : ''}
            `}
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="overflow-hidden aspect-3/4">
                      <img
                        src={item.images.jpg.image_url}
                        alt={item.title}
                        className="rounded-sm h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h1 className="text-xs line-clamp-2 font-semibold text-slate-700 sm:text-base lg:text-lg">{item.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Popular Characters */}
          <div>
            <h2 className=" font-bold text-lg pt-5">Popular Characters</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
              {topCharacters.slice(0, 10).map((item, index) => (
                <div
                  key={item.mal_id}
                  className={`group shadow-lg hover:shadow-2xl p-2 rounded-md bg-white transition-all duration-300
            ${index >= 6 ? 'hidden' : 'block'}
            ${index >= 6 && index <= 7 ? 'hidden sm:block' : ''}
            ${index >= 8 ? 'lg:block' : ''}
            `}
                >
                  <div className="flex flex-col justify-center items-center">
                    <div className="overflow-hidden aspect-3/4">
                      <img
                        src={item.images.jpg.image_url}
                        alt={item.name}
                        className="rounded-sm h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h1 className="text-xs font-semibold text-slate-700 sm:text-base lg:text-lg">{item.name}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}