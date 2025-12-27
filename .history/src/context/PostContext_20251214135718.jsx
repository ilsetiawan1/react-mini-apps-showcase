import React, { createContext, useState, useEffect } from 'react';

// FUNGSI HELPER: Memuat data dari Local Storage
const getSavedPosts = () => {
  const saved = localStorage.getItem('POST_KEY');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Gagal memuat data dari Local Storage:', e);
    }
  }
  return [];
};

export const PostContext = createContext(null);

// POSTPROVIDER - FIX: Menggunakan children huruf kecil
const PostProvider = ({ children }) => {
  // STATE
  const [posts, setPosts] = useState(getSavedPosts);
  const [formData, setFormData] = useState({ title: '', content: '' });

  // PERSISTENCE (WRITE TO LOCAL STORAGE)
  useEffect(() => {
    // Menyimpan data setiap kali 'posts' berubah
    localStorage.setItem('POST_KEY', JSON.stringify(posts));
  }, [posts]);

  // HANDLERS (Logika harus ada di sini)
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    // Placeholder for validation and new post creation
    if (!formData.title || !formData.content) return;

    const newPost = { id: Date.now(), title: formData.title, content: formData.content };
    setPosts([newPost, ...posts]);
    setFormData({ title: '', content: '' });
  };

  // 1. BUAT OBJECT VALUE
  const contextValue = {
    posts, // Data
    formData, // Data Form
    handleFormChange, // Logic
    handleAddPost, // Logic
    // ... Tambahkan handlers lain seperti handleDeletePost di sini
  };

  return (
    // 2. FIXED: Memberikan value={contextValue} yang mandatory
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};

export { PostContext, PostProvider };
