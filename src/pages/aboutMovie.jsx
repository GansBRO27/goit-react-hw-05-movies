import { NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchFilm } from 'servises/fetchFilms';

const AboutMovie = () => {
  const [movie, setMovie] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const bakLink = location.state?.from ?? '/';
  useEffect(() => {
    fetchFilm(movieId)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setIsLoad(true);
      });
  }, [movieId]);
  const { title, poster_path, release_date, popularity, overview, genres } =
    movie;

  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <NavLink to={bakLink}>BACK</NavLink>
      <div>
        <img src={isLoad ? imageURL : ''} alt="poster" />
      </div>
      <p>{title}</p>
      <p>{release_date}</p>
      <p>{popularity}</p>
      <p>{overview}</p>
      {isLoad ??
        genres.map(genre => {
          return <p key={genre.id}>{genre.name}</p>;
        })}
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
};
export default AboutMovie;
AboutMovie.propTypes = {
  movie: PropTypes.string,
  isLoad: PropTypes.bool,
  
};
