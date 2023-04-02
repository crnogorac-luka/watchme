import {Genre} from "../../models/Genre";

export const parseGenres = (data: any[]) => {
    return data ? data.map((genre: any) => createGenre(genre)) : null;
  };
  
  export const createGenre = ({id, name}: {id: number, name: string}) => {
    return new Genre(id, name);
  }