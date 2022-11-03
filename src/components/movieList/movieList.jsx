import { NavLink } from 'react-router-dom';
const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, title, name } = movie;
        return (
          <li key={id}>
            <NavLink to={`movies/${id}`}>{title ? title : name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
