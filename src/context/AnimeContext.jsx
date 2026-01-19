import { createContext, useState } from 'react';

const AnimeContext = createContext(null);

const AnimeProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);

  const contextValue = {
    animeList,
    setAnimeList,
  };

  return <AnimeContext.Provider value={contextValue}>{children}</AnimeContext.Provider>;
};

export { AnimeContext, AnimeProvider };
