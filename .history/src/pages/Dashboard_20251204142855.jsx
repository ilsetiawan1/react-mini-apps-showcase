import React from 'react';
import { Link } from 'react-router-dom';
import { AppCard } from '../components/AppCard'; // Komponen tampilan card

export const Dashboard = () => {
  // Data dummy untuk kartu aplikasi
  const apps = [
    {
      name: 'To-Do List (Persistence)',
      path: '/todolist',
      description: 'Aplikasi pencatat tugas dengan penyimpanan data lokal (localStorage). Menguji Immutability, useState, dan useEffect.',
      icon: '📝',
      status: 'CRUD Selesai',
    },
    {
      name: 'Calculator Sederhana',
      path: '/calculator',
      description: 'Aplikasi kalkulator dasar untuk melatih logika state angka dan event handling.',
      icon: '🔢',
      status: 'Belum Dibuat',
    },
    // Tambahkan mini-app lain di sini
  ];

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">Mini-Apps Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <Link key={app.path} to={app.path}>
            <AppCard app={app} />
          </Link>
        ))}
      </div>
    </div>
  );
};
