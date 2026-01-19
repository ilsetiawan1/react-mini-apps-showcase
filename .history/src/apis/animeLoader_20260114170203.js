export const getTopAnime = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=12`);
    if (!response.ok) {
        throw new Error()
    }
}