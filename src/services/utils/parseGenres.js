import { Genre } from "../../models/Genre";

export const parseGenres = (data) => {
    return data ? data.map((genre) => createGenre(genre)) : [];
  };
  
  export const createGenre = ({id, name}) => {
    return id && name ? new Genre(id, name) : null;
  }