export const getTopAnime = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=12`);
    if (!response.ok) {
        throw new Error(`Gagal mengambil data dari Jikan API`)
    }

    const result = await response.json();
    return result.data;
}


export const getMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular`);
    if (!response.ok) {
      throw new Error(`Gagal mengambil data dari TMDB API`);
    }

    const result = await response.json();
    return result.data;
}

// GET https://api.themoviedb.org/3/movie/popular
// GET https://api.themoviedb.org/3/search/movie?query=batman
