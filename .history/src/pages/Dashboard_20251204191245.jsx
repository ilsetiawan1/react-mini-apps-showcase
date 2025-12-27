import React from 'react'
import '../index.css'

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-br from-teal-500 to-slate-800 text-white p-12 md:p-16 rounded-3xl shadow-2xl mb-12 transform hover:scale-[1.01] transition duration-500">
      {/* Slogan Utama */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">React Mini Apps </h1>

      {/* Deskripsi Kunci */}
      <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
        {' '}
        Tantangan Kecil: <br />
        Menguji Context API & Immutability di Skala Mini.
      </p>

      {/* Poin Kunci (Tag/Pill) */}
      <div className="flex flex-wrap gap-3 mt-8">
        <span className="px-4 py-1.5 rounded-full bg-emerald-300 text-teal-900 font-bold text-sm">#ContextAPI</span>
        <span className="px-4 py-1.5 rounded-full bg-cyan-300 text-teal-900 font-bold text-sm">#ReactRouter</span>
        <span className="px-4 py-1.5 rounded-full bg-indigo-300 text-teal-900 font-bold text-sm">#Immutability</span>
      </div>
    </div>
  );
}

export default Dashboard