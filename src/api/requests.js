const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchAction: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTopRatedTv: `/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
};

export default requests;
