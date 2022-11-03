const KEY = 'c209fa6cb0ce43326b8f217a57ec8985';
export function fetchPopularMovies() {
  return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);
}
export function fetchFilms(query, page) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&page=${page}`
  );
}
export function fetchFilm(id) {
  return fetch(
    `
https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
}
export function fetchActors(id) {
  return fetch(
    `
https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
}
export function fetchReviews(id) {
  return fetch(
    `
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
