const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getUrl = () => {
  return `${API_BASE_URL}/discover/movie?sory_by=popularity.desc`;
};
