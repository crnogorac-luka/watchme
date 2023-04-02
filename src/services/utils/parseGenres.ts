import {Genre} from "../../models/Genre";

export const parseGenres = (data: Array<{ id: number, name: string }>) => {
    return data ? data.map((genre: { id: number, name: string }) => createGenre(genre)) : null;
  };
  
  export const createGenre = ({id, name}: {id: number, name: string}) => {
    return new Genre(id, name);
  }