import "regenerator-runtime";
import '../component/movie-list.js';
import '../component/search-movie.js';
import ApiSource from '../data/api-source.js';


const main =  () => {
    const searchMovie = document.querySelector("search-movie");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked =  () => {
      ApiSource.searchMovie(searchMovie.value)
          .then(renderResult)
          .catch(fallbackResult)
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

        searchMovie.clickEvent = onButtonSearchClicked;
};

export default main;
