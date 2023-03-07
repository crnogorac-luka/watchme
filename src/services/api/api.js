import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getTrending = async (timeWindow) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/trending/movie/${timeWindow}`, {
        params: {
            api_key: API_KEY
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getAllGenres = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/genre/movie/list`, {
        params: {
            api_key: API_KEY,
            language: "en-US"
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getImdbInfo = async (externalId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/find/${externalId}`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            external_source: "imdb_id"
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};


export const getMovie = async (movieId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/movie/${movieId}`, {
          params: {
              api_key: API_KEY,
              language: "en-US"
          }
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

