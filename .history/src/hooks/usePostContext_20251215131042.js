import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

// Custom Hook WAJIB dimulai dengan 'use'
export const usePostContext = () => {
  // 1. Panggil useContext dengan Context yang kita buat
  const context = useContext(PostContext);

  // 2. Safety Check (Penting!)
  if (context === null) {
    throw new Error('usePostContext harus dipanggil di dalam PostProvider.');
  }

  // 3. Mengembalikan objek value: { posts, popup }
  return context;
};
