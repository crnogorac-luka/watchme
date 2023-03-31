import {Genre} from "../../models/Genre";

export const parseGenres = (data: any[]) => {
    return data ? data.map((genre: any) => createGenre(genre)) : [];
  };
  
  export const createGenre = ({id, name}: {id: number, name: string}) => {
    return id && name ? new Genre(id, name) : null;
  }