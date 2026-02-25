import axios from 'axios';

const apiKey = import.meta.env.VITE_TMDB_API_KEY
const baseUrl = import.meta.env.VITE_TMDB_BASE_URL

export const getTopMovies = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    // console.log(data.results)
    return data.results;
  } catch (error) {
    console.log('Gagal fetch movie:', error.message);
    return [];
  }
};
