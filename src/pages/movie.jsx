import { useState, useEffect } from 'react';
import BigMovieList from '../components/moviesList/bigMovieList';
import { fetchFilms } from '../servises/fetchFilms';
import { Outlet, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [moviePage, setMoviePage] = useState(1);
  const [total, setTotal] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (!query) {
      return;
    }

    if (query !== search) {
      setMovies([]);
      setMoviePage(1);
    }

    fetchFilms(query, moviePage)
      .then(response => response.json())
      .then(({ results, total_pages }) => {
        setMovies(prevState => [...prevState, ...results]);
        setSearch(query);
        setTotal(total_pages);
      });
  }, [query, search, moviePage]);
  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('put movie name please');
    }
    const form = e.currentTarget;

    setSearchParams({
      query: form.elements.searchQuery.value,
    });
  };
  const onLoadMore = () => {
    setMoviePage(prevState => prevState + 1);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="searchQuery" />
          <button>search</button>
        </form>

        {query && <BigMovieList movies={movies} location={location} />}
        {total > 1 && <button onClick={onLoadMore}>load more</button>}
        <Outlet />
      </div>
    </>
  );
};
export default Movies;
Movies.propTypes = {
  movies: PropTypes.array,
  search: PropTypes.string,
  moviePage: PropTypes.string,
};
