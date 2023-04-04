import axios from "axios";
import queryString from "query-string";
const NodeCache = require("node-cache");

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

export const getTrending = async (timeWindow: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/trending/movie/${timeWindow}`, {
        params: {
            api_key: API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// GET ALL GENRES
export const getAllGenres = async () => {
  //const cacheKey = "genres";

    // Check if the data is already cached
    // const cachedData = cache.get(cacheKey);
    // if (cachedData) {
    //   return cachedData;
    // }
  try {
    const response = await axios.get(
      `${API_BASE_URL}/genre/movie/list`, {
        params: {
            api_key: API_KEY,
            language: "en-US"
        }
      }
    );
    //cache.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//GET IMDBINFO BY EXTERNAL ID
export const getImdbInfo = async (externalId: string | number) => {
  const cacheKey = `imdbInfo_${externalId}`;

    // Check if the data is already cached
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
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
    cache.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// GET MOVIE BY MOVIEID
export const getMovie = async (movieId: string | number) => {
  const cacheKey = `movie_${movieId}`;

    // Check if the data is already cached
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }
    try {
      const response = await axios.get(
        `${API_BASE_URL}/movie/${movieId}`, {
          params: {
              api_key: API_KEY,
              language: "en-US"
          }
        }
      );
      cache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // GET VIDEOS BY MOVIEID
  export const getVideos = async (movieId: string | number) => {
    const cacheKey = `videos_${movieId}`;

    // Check if the data is already cached
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    try {
      const response = await axios.get(
        `${API_BASE_URL}/movie/${movieId}/videos`, {
          params: {
              api_key: API_KEY,
              language: "en-US"
          }
        }
      );
      cache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };


  //GET ALL MOVIES + FILTER AND SORT
  export const getAllMovies = async (page: number, filters: any, sort: string) => {

  try {
    const response = await axios.get(
      `${API_BASE_URL}/discover/movie/`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            page: page,
            sort_by: sort,
            ...filters
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
  