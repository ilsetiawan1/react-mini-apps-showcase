import { createContext, useEffect, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  // State Utama
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('my-posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [inputPost, setInputPost] = useState({
    title: '',
    content: '',
  });

  // Akses localstorage posts
  useEffect(() => {
    localStorage.setItem('my-posts', JSON.stringify(posts));
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

    setPosts((prev) => [...prev, newPost]);
    setInputPost({
      title: '',
      content: '',
    });
  };

  // Delete posts
  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
    console.log(`Data berhasil dihapus dari State & LocalStorage`);
  };

  // // Update
  // const updatePost = (id) => {
  //   const updatedItems = posts.map(prev => {
  //     if (prev.id === id) {
  //       return {...prev, [name]: value}
  //     }
  //     return prev;
  //   })
  // }

  const contextValue = {
    posts,
    inputPost,
    handleInputChange,
    handleAddPost,
    deletePost,
  };

  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>;
};

export { PostContext, PostProvider };
