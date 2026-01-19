// src/pages/AnimeHubPage.jsx
import { useLoaderData } from 'react-router-dom';

const AnimeHubPage = () => {
  const movies = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-slate-800 text-white p-3 rounded">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded mb-2" />
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <p className="text-sm opacity-70">⭐ {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimeHubPage;
