import axios from "axios";

const BASE_URL = 'https://api.jikan.moe/v4';

export const getTopAnimes = async () => {
    try {
        const {data} = await axios.get(`${BASE_URL}/top/anime`)
        // console.log(data.data)
        return data.data;
    } catch (error) {
        console.log("Gagal fetch anime:", error.message);
        return [];
    }
}