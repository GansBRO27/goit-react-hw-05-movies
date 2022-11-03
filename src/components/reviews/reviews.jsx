import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { fetchReviews } from 'servises/fetchFilms';

import { useParams } from 'react-router-dom';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setRevievs] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    fetchReviews(movieId)
      .then(response => response.json())
      .then(({ results }) => {
        setRevievs(results);
        setIsLoad(true);
        console.log(results);
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {isLoad & (reviews.length > 0)
          ? reviews.map(({ author, content }) => {
              return (
                <li key={nanoid()}>
                  <p>{author}</p>
                  <p>{content}</p>
                </li>
              );
            })
          : 'not found reviews'}
      </ul>
    </>
  );
};
export default Reviews;
