import {BASE_URL, API_KEY} from "@env";

export default async (queryParams) =>{
    const baseUrl = BASE_URL || 'https://api.nasa.gov/planetary/apod?api_key='
    const parameters = queryParams || '';   

    try {
        const response = await fetch(`${baseUrl}${API_KEY}${parameters}`);
        const data = await response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({});
    }
}