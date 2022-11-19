import { useState, useEffect } from 'react';
import MovieList from 'components/movieList/movieList';
import PropTypes from 'prop-types';
import {  useLocation } from 'react-router-dom';
import { fetchPopularMovies } from '../servises/fetchFilms';
const Home = () => {
  const [movies, setMovies] = useState([]);
    const location = useLocation();
  useEffect(() => {
    fetchPopularMovies()
      .then(response => response.json())
      .then(({ results }) => {
        setMovies([...results]);
      });
  }, []);
  return <MovieList movies={movies} location ={location} />;
};
export default Home;
Home.propTypes = {
  movies: PropTypes.array,
};
