const BASE_URL = "https://api.themoviedb.org/3/movie/now_playing?";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?";
const apiKey = import.meta.env.VITE_APP_API_KEY;

export const fetchNowPlaying = async (page = 1) => {
  const url = `${BASE_URL}api_key=${apiKey}&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const searchResult = async (query) => {
  const url = `${SEARCH_URL}api_key=${apiKey}&query=${query}&include_adult=false&language=en-US&page=1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const searchData = await response.json();
    return searchData.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
