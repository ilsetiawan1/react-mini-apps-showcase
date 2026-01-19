import { useContext } from 'react';
import { Anime } from '../context/CalcContext';

// Custom Hook WAJIB dimulai dengan 'use'
export const useCalcContext = () => {
  // 1. Panggil useContext dengan Context yang kita buat
  const context = useContext(CalcContext);

  // 2. Safety Check (Penting!)
  if (context === null) {
    throw new Error('useCalcContext harus dipanggil di dalam CalcProvider.');
  }

  // 3. Mengembalikan objek value: { Calcs, popup }
  return context;
};
