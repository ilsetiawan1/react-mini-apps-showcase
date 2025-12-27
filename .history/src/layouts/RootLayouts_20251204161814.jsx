import React from 'react';
import { Outlet } from 'react-router-dom';
// Gunakan Outlet untuk menampilkan Child Route

// Komponen global (Header/Navbar)
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">Mini-Apps Showcase 🚀</h1>
      </div>
    </header>
  );
};

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header / Navbar (Muncul di semua rute) */}
      <Header />

      <main className="max-w-7xl mx-auto p-4">
        {/* Outlet akan me-render komponen yang cocok dengan URL (misal Dashboard atau TodoListPage) */}
        <Outlet />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};
