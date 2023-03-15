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
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// GET ALL GENRES
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
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//GET IMDBINFO BY EXTERNAL ID
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
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// GET MOVIE BY MOVIEID
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

  // GET VIDEOS BY MOVIEID
  export const getVideos = async (movieId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/movie/${movieId}/videos`, {
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


  //GET ALL MOVIES + FILTER AND SORT
  export const getAllMovies = async (page, filters, sort) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/discover/movie`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            page: page,
            filters: encodeURIComponent(filters),
            sort_by: sort
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
  