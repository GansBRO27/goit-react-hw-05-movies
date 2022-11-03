import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './sharedLayaut.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
