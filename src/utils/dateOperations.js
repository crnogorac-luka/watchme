export const getReleaseYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
}