import axios from "axios";

const BASEURL = 'https://imdb-api.com/en/API/';
const API_KEY = process.env.IMDB_API_KEY;

export const generateUrlWithKey = (url: string) => `${url}/${API_KEY}`;

export default axios.create({
    baseURL: BASEURL,
    responseType: "json",
});
