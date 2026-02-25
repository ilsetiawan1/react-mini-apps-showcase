
import { getTopMovies } from "./tmdbApi";
import { getTopAnimes } from "./jikanApi";

export const cinemaTVLoader = async () => {
  try {
    const [movies, animes] = await Promise.all([getTopMovies(), getTopAnimes()]);
    return {
      topMovies: movies,
      topAnimes: animes
    }
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return {topMovies: [], topAnimes: []};
  }
}

export const searchCinema = () => {

}