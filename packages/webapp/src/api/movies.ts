import { generatePath } from "react-router";
import API, { generateUrlWithKey } from ".";

export async function getMoviesFromApi() {
    const result = await API.get(generateUrlWithKey('Top250Movies'));
    return result.data;
}
