import {BASE_URL, API_KEY} from "@env";

export default async () =>{
    const baseUrl = BASE_URL || 'https://api.nasa.gov/planetary/apod?api_key='
   
    try {
        const response = await fetch(`${baseUrl}${API_KEY}`);
        const data = await response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject({});
    }
}