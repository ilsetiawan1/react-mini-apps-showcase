export const getAnimeData = async () => {
  // Get Data
  const respTop = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10`);
  const respTopCharacters = await fetch(`https://api.jikan.moe/v4/top/characters?limit=10`);

  const topAnime = await respTop.json();
  cont

  console.log(topAnime)
  return {
    populer: topAnime.data,
    
  }
};
