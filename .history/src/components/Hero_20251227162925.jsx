import React from 'react';

const Hero = () => {
  return (
    <section
      className="
        
        p-10 md:p-14
        rounded-3xl
        bg-slate-900 border border-slate-800
        transition-transform duration-300 ease-out
        hover:scale-[1.01]
      "
    >
      {/* Heading */}
      <h1
        className="
          text-4xl md:text-6xl font-extrabold mb-4 tracking-tight
          bg-linear-to-r from-white to-slate-400
          bg-clip-text text-transparent
        "
      >
        React Mini Apps Showcase
      </h1>

      {/* Sub text */}
      <p className="hidden md:block text-slate-400 max-w-xl">Kumpulan mini project React untuk eksplorasi konsep fundamental dan praktik modern frontend.</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-8">
        {['#ContextAPI', '#ReactRouter', '#Immutability'].map((tag) => (
          <span
            key={tag}
            className="
              px-4 py-1.5 rounded-full
              bg-white/10 text-white
              text-xs md:text:base font-medium
              transition-transform duration-200
              hover:scale-105
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
