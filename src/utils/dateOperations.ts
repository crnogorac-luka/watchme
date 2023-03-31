export const getReleaseYear = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear();
}