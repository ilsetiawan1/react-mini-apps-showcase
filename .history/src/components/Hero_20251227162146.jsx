import React from 'react';

const Hero = () => {
  return (
    <section
      className="
          mb-12
        transition-transform duration-300 ease-out
        hover:scale-[1.02]
      "
    >
      {/* Heading */}
      <h1
        className="
        text-4xl 
        md:text-6xl 
        font-extrabold
         mb-4 
         tracking-tight
         bg-linear-to-r 
         from-teal-600 
         to-slate-800
         bg-clip-text 
         text-transparent"
      >
        React Mini Apps Showcase
      </h1>

      {/* Sub text (opsional tapi cakep) */}
      <p className="text-slate-400 max-w-xl">Kumpulan mini project React untuk eksplorasi konsep fundamental dan praktik modern frontend.</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-8">
        <span
          className="
            px-4 py-1.5 rounded-full
            bg-white/10 text-white
            text-sm font-medium
            transition-transform duration-200
            hover:scale-105
          "
        >
          #ContextAPI
        </span>

        <span
          className="
            px-4 py-1.5 rounded-full
            bg-white/10 text-white
            text-sm font-medium
            transition-transform duration-200
            hover:scale-105
          "
        >
          #ReactRouter
        </span>

        <span
          className="
            px-4 py-1.5 rounded-full
            bg-white/10 text-white
            text-sm font-medium
            transition-transform duration-200
            hover:scale-105
          "
        >
          #Immutability
        </span>
      </div>
    </section>
  );
};

export default Hero;
