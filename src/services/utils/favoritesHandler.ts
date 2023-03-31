export const addToFavorites = (newId: number) => {
  if (!localStorage.getItem("favoriteMovies")) {
    localStorage.setItem("favoriteMovies", JSON.stringify([]));
  }
  if(!isFavorite(newId)) {
    let existingData: number[] = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    existingData.push(newId);
    localStorage.setItem("favoriteMovies", JSON.stringify(existingData));
  }
};

export const removeFromFavorites = (movieId: number) => {
  if(isFavorite(movieId)) {
    let existingData = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
      const index = existingData.indexOf(movieId);
      if (index !== -1) {
        existingData.splice(index, 1);
      }
      localStorage.setItem("favoriteMovies", JSON.stringify(existingData));
  }
}

export const isFavorite = (movieId: number) => {
  let movies = localStorage.getItem("favoriteMovies")
  if (movies) 
      return movies.includes(movieId.toString())
    else
      return false
};
