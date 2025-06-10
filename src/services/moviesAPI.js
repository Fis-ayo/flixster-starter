const BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing?';
const apiKey = import.meta.env.VITE_APP_API_KEY;

export const fetchNowPlaying = async(page=1, title = "")  => {
    const url = `${BASE_URL}api_key=${apiKey}&page=${page}&title=${title}`
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Failed to fetch movies')
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
    
};
