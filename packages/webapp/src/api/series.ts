import API, { generateUrlWithKey } from ".";

export async function getSeriesFromApi() {
    const result = await API.get(generateUrlWithKey('Top250TVs'));
    return result.data;
}
