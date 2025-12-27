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
  const handleInputChange = () => {
    
  }

  // Add post
  const handleAddPost = () => {

  }

  const contextValue = {
    posts,
    inputPost,
    handleInputChange,
    handleAddPost
  };

  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>;
};

export { PostContext, PostProvider };
