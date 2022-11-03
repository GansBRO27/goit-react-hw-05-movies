import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
const BigMovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => {
        const { id, title } = movie;
        return (
          <li key={nanoid()}>
            <NavLink to={`${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default BigMovieList;
