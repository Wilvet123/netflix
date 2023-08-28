const apikey = '9773156953ce04aa3ac2ac5a165eb7ec'

const requests = {
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}&language=en-US`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`,
    personPopular: `https://api.themoviedb.org/3/person/popular?api_key=${apikey}&language=en-US&page=1`,
    tvShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&language=en-US&page=1`,
    people: `https://api.themoviedb.org/3/trending/person/day?api_key=${apikey}&language=en-US`,
    movieDay: `https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}&language=en-US`
}
export default requests