import React from 'react';
import { Link } from 'react-router-dom';
import { TodoListApp } from '../features/todo/TodoListApp'; // Import App Utama To-Do

export const TodoListPage = () => {
  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 hover:underline">
        &larr; Kembali ke Dashboard
      </Link>
      <h2 className="text-3xl font-bold mt-4 mb-8 border-b pb-2">To-Do List (Persistence Demo)</h2>

      {/* Konten utama To-Do List akan diletakkan di sini */}
      <TodoListApp />
    </div>
  );
};
