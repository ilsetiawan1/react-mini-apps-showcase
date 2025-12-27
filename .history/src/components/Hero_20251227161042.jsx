import React from 'react';

const Hero = () => {
  return (
    <section className=" px-4 py-12 md:p-16 rounded-3xl shadow-2xl mb-12 transform  transition duration-500">
      {/* Slogan Utama */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
        React
        Mini Apps
      </h1>

      {/* Deskripsi  */}
      <p className="text-xl md:text-2xl font-light mb-6 opacity-90">
        {' '}
        Tantangan Kecil: <br />
        Menguji Context API & Immutability di Skala Mini.
      </p>

      {/* Poin  */}
      <div className="flex flex-wrap gap-3 mt-8">
        <span className="px-4 py-1.5 rounded-full bg-emerald-300 text-teal-900 font-bold text-sm hover:scale-[1.01]">#ContextAPI</span>
        <span className="px-4 py-1.5 rounded-full bg-cyan-300 text-teal-900 font-bold text-sm hover:scale-[1.01]">#ReactRouter</span>
        <span className="px-4 py-1.5 rounded-full bg-indigo-300 text-teal-900 font-bold text-sm hover:scale-[1.01]">#Immutability</span>
      </div>
    </section>
  );
};

export default Hero;
