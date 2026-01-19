import { useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';

// Custom Hook WAJIB dimulai dengan 'use'
export const useAnimeContext = () => {
  // 1. Panggil useContext dengan Context yang kita buat
  const context = useContext(AnimeContext);

  // 2. Safety Check (Penting!)
  if (context === null) {
    throw new Error('useAnimeContext harus dipanggil di dalam AnimeProvider.');
  }

  // 3. Mengembalikan objek value: { Anime, popup }
  return context;
};
