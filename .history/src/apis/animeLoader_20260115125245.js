export const getAnimeData = async () => {
  // Get Data
  const respTop = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10`);

  const topAnime = await respTop.json();

  return {
    populer: topAnime.data
  }
};
