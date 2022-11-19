import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { fetchActors } from 'servises/fetchFilms';
import { useParams } from 'react-router-dom';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    fetchActors(movieId)
      .then(response => response.json())
      .then(({ cast }) => {
        setCast(cast);
        setIsLoad(true);
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {isLoad &&
          cast.map(actor => {
            return <li key={nanoid()}>{actor.name}</li>;
          })}
      </ul>
    </>
  );
};
export default Cast;
