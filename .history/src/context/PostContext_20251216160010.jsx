import { createContext, useEffect, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  // State Utama
  const [posts, setPosts] = useState([]);
  const [inputPost, setInputPost] = useState({
    title: '',
    content: '',
  });

  // Data Posts terbaru (Monitoring)
  useEffect(() => {
    console.log('Data Posts Terbaru:', posts);
  }, [posts]);

  // OnChange input user
  const change

  // Add post

  const contextValue = {
    posts,
    inputPost,
    // Jangan lupa masukkan fungsi baru kamu ke sini nanti agar bisa diakses Component
  };

  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>;
};

export { PostContext, PostProvider };
