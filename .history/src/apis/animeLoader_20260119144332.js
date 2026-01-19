export const getAnimeData = async () => {
  try {
    // Ambil data secara bersamaan (lebih cepat dan efisien)
    const [respAnime, respChar] = await Promise.all([fetch(`https://api.jikan.moe/v4/top/anime?limit=10`), fetch(`https://api.jikan.moe/v4/top/characters?limit=10`)]);

    // Cek jika response gagal (misal error 429: Too Many Requests)
    if (!respAnime.ok || !respChar.ok) {
      throw new Error('Gagal mengambil data dari API Jikan');
    }

    const topAnimes = await respAnime.json();
    const topCharacters = await respChar.json();

    // Pastikan data ada sebelum di-merge
    const animeList = topAnimes.data || [];
    const charList = topCharacters.data || [];

    return {
      topAnimes: animeList,
      topCharacters: charList,
      allData: [...animeList, ...charList],
    };
  } catch (error) {
    console.error('Loader Error:', error);

    return { topAnimes: [], topCharacters: [], allData: [] };
  }
};
