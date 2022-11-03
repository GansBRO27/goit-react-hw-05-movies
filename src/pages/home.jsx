import { useState, useEffect } from 'react';
import MovieList from 'components/movieList/movieList';
import PropTypes from 'prop-types';
import { fetchPopularMovies } from '../servises/fetchFilms';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopularMovies()
      .then(response => response.json())
      .then(({ results }) => {
        setMovies([...results]);
      });
  }, []);
  return <MovieList movies={movies} />;
};
export default Home;
Home.propTypes = {
  movies: PropTypes.array,
};
