import axios from "axios";

const api_key = 'f62f750b70a8ef11dad44670cfb6aa57';

export const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    // 5 minutes
    // timeout: 300000,
    params: {
        api_key: api_key
    }
});