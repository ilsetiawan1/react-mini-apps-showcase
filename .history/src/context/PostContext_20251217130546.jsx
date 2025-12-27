import { createContext, useEffect, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  // State Utama
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('my-posts');
    return savedPosts ? JSON.parse
  });
  const [inputPost, setInputPost] = useState({
    title: '',
    content: '',
  });

  // Data Posts terbaru (Monitoring)
  useEffect(() => {
    console.log('Data Posts Terbaru:', posts);
  }, [posts]);

  // OnChange input user
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add post
  const handleAddPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...inputPost,
      id: Date.now(),
    };

    setPosts([...posts, newPost]);
    setInputPost({
      title: '',
      content: '',
    });
  };

  const contextValue = {
    posts,
    inputPost,
    handleInputChange,
    handleAddPost,
  };

  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>;
};

export { PostContext, PostProvider };
