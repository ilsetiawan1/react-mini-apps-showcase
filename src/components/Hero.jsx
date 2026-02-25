import React from 'react';

const Hero = () => {


  const REACT_FUNDAMENTALS = [
    { id: 1, name: '#FunctionalComponent' },
    { id: 2, name: '#Props-Handling' },
    { id: 3, name: '#ReactRouterV6' },
    { id: 4, name: '#DataFetching' },
    { id: 5, name: '#AsyncAwait' },
    { id: 6, name: '#Destructuring' },
    { id: 7, name: '#ConditionalRendering' },
  ];
  return (
    <section
      className="
        mb-5
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
        {REACT_FUNDAMENTALS.map((tag) => (
          <span
            key={tag.id} 
            className="
        px-4 py-1.5 rounded-full
        bg-teal-500/20 text-teal-300
        text-xs md:text-base font-medium
        transition-transform duration-200
        hover:scale-105
      "
          >
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
