import { createContext, useState } from 'react';

const AnimeContext = createContext(null);

const AnimeProvider = ({ children }) => {

  return <AnimeContext.Provider value={contextValue}>{children}</AnimeContext.Provider>;
};
export { AnimeContext, AnimeProvider };
