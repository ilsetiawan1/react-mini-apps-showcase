export const getAnimeData = async () => {
  // Get Data
  const respTopAnime = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10`);
  const respTopCharacters = await fetch(`https://api.jikan.moe/v4/top/characters?limit=10`);

  const topAnimes = await respTopAnime.json();
  const topCharacters = await respTopCharacters.json();
  const allDataMerged = [...topAnime.data, ...topCharacters.data]

  // console.log(topAnime)
  return {
    topAnimes: topAnime.data,
    topCharacters: topCharacters.data,
    allData: allDataMerged
  }
};
