export const getAnimeData = async () => {
  // Get Data
  const respTopAnime = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10`);
  const respTopCharacters = await fetch(`https://api.jikan.moe/v4/top/characters?limit=10`);

  const topAnime = await respTopAnime.json();
  const topCharacters = await respTopCharacters.json();

  // console.log(topAnime)
  return {
    populer: topAnime.data,
    top
    
  }
};
