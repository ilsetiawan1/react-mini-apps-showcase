import React from 'react';
// Nanti kita akan import Context dan komponen lain di sini

export const TodoListApp = () => {
  // Di sinilah semua logic To-Do List (form, list, delete) akan di-render

  // CLUE: Nanti kita akan memanggil Context API di sini
  // const { posts, addPost, deletePost, ... } = usePostContext();

  return (
    <div className="max-w-xl mx-auto">
      {/* Placeholder untuk Form Input */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-gray-500">[Placeholder: Form Input To-Do]</p>
      </div>

      {/* Placeholder untuk Daftar Tugas */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-500">[Placeholder: Daftar Tugas (List Rendering)]</p>
      </div>
    </div>
  );
};
