import React from 'react';

const ContentCard = ({ date, rate, title, poster, overview, className = '' }) => {
  const displayRate = rate ? rate.toFixed(1) : '0.0';
  return (
    <div
      className={`group shadow-lg  hover:shadow-2xl px-2 pt-2 pb-4 rounded-xl  transition-all duration-300
            ${className}    
            `}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="relative overflow-hidden rounded-xl aspect-3/4">
          {/* Image */}
          <img src={poster} alt={title} className="rounded-xl h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          {/* Rating */}
          <span className="absolute top-2 right-2 text-end text-xs line-clamp-2 font-thin text-yellow-400 sm:text-base lg:text-lg opacity-90 group-hover:z-20 bg-slate-800 px-2 rounded-xl">
            ⭐{displayRate}
          </span>
          {/* Date & Overview */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 transition-opacity duration-500 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 ">
            <p className="text-white font-bold text-xs text-end">{date}</p>
            <h1 className="text-slate-200 text-xs text-justify line-clamp-5">{overview}</h1>
          </div>
        </div>
        {/* Title */}
        <div className="mt-2 shadow-sm bg-slate-50 group-hover:bg-slate-100 transition-all duration-500 w-full h-10 sm:h-12 flex items-center justify-center rounded-xl p-4 border border-slate-100">
          <h1 className="text-sm text-slate-600 group-hover:text-slate-800  transition-all duration-300 line-clamp-2 group-hover:font-semibold text-center leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
