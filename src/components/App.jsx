import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
const SharedLayout = lazy(() => import('./header/sharedLayaut'));
const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/movie'));
const Movie = lazy(() => import('../pages/aboutMovie'));
const Casts = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('../components/reviews/reviews'));
export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="*" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
