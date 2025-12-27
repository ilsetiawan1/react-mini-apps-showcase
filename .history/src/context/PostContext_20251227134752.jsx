import { createContext, useEffect, useState } from 'react';

const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  // State Utama
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('my-posts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  // Input State
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

  // Edit mode
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState({ title: '', content: '' });

  const handleEditMode = (id) => {
    setEditId(id);

    // cari data post yang  diklik untuk mengisi form secara otomatis
    const currentPost = posts.find((p) => p.id == id);
    if (currentPost) {
      setEditInput({ title: currentPost.title, content: currentPost.content });
    }
  };

  const handleUpdateChange = (e) => {
        const { name, value } = e.target;

        setEditInput((prev) => ({
          ...prev,
          [name]: value,
        }));
  };

  const handleSaveUpdate = (e) => {
      e.preventDefault();

      setPosts((prev) =>
      prev.map((post) =>))
  }

  const cancelEdit = () => setEditId(nul);

  const contextValue = {
    posts,
    inputPost,
    editId,
    editInput,
    handleInputChange,
    handleUpdateChange,
    handleAddPost,
    handleEditMode,
    deletePost,
  };

  return <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>;
};

export { PostContext, PostProvider };
