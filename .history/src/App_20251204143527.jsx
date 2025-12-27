import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PASTIKAN SEMUA INI ADALAH NAMED EXPORT (sesuai file di folder pages)
import { Dashboard } from './pages/Dashboard.jsx';
import { ToDoListPage } from './pages/ToDoListPage.jsx';

function App() {
  return (
    // Struktur Layout Global
    <div className="min-h-screen bg-gray-100">
      Halo
    </div>
  );
}

export default App;
