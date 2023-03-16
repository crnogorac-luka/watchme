export const addToFavorites = (newId) => {
  if (!localStorage.getItem("favoriteMovies")) {
    localStorage.setItem("favoriteMovies", JSON.stringify([]));
  }
  if(!isFavorite(newId)) {
    let existingData = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    existingData.push(newId);
    localStorage.setItem("favoriteMovies", JSON.stringify(existingData));
  }
};

export const removeFromFavorites = (movieId) => {
  if(isFavorite(movieId)) {
    let existingData = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
      const index = existingData.indexOf(movieId);
      if (index !== -1) {
        existingData.splice(index, 1);
      }
      localStorage.setItem("favoriteMovies", JSON.stringify(existingData));
  }
}

export const isFavorite = (movieId) => {
  return (
    localStorage.getItem("favoriteMovies") &&
    localStorage.getItem("favoriteMovies").includes(movieId)
  );
};
