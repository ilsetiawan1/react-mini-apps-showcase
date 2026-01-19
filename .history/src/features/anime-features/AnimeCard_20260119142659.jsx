import React from 'react'

const AnimeCard = (item, index, title) => {
  return (
    <div
      className={`group shadow-lg hover:shadow-2xl p-2 rounded-md bg-white transition-all duration-300
                ${index >= 6 ? 'hidden' : 'block'}
                ${index >= 6 && index <= 7 ? 'hidden sm:block' : ''} 
                ${index >= 8 ? 'lg:block' : ''}
            `}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="overflow-hidden aspect-3/4">
          <img src={item.images.jpg.image_url} alt={title} className="rounded-sm h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <h1 className="text-xs line-clamp-2 font-semibold text-slate-700 sm:text-base lg:text-lg">{title}</h1>
      </div>
    </div>
  );
}

export default AnimeCard