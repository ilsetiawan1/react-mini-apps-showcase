// src\context\AnimeContext.jsx
import { createContext, useState } from 'react';

const AnimeContext = createContext(null);

const AnimeProvider = ({ children }) => {
  // Tambahkan state atau fungsi di sini nanti
  const [animeList, setAnimeList] = useState([]);

  const contextValue = {
    animeList,
    setAnimeList,
  };

  return <AnimeContext.Provider value={contextValue}>{children}</AnimeContext.Provider>;
};

export { AnimeContext, AnimeProvider };
