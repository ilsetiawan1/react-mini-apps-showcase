import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PASTIKAN SEMUA INI ADALAH NAMED EXPORT (sesuai file di folder pages)
import { Dashboard } from './pages/Dashboard.jsx';
import { ToDoListPage } from './pages/ToDoListPage.jsx';

function App() {
  return (
    // Struktur Layout Global
    <div className="min-h-screen bg-gray-100">
      {/* Di sini nanti kita bisa tambahkan Header/Navbar Global */}
      {/* <Header /> */}

      <main className="p-8">
        <Routes>
          {/* Rute Halaman Beranda / Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Rute Mini-App To-Do List */}
          <Route path="/todolist" element={<ToDoListPage />} />

          {/* Rute 404 */}
          <Route path="*" element={<div>404 | Halaman Tidak Ditemukan</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
