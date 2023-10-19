import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Logo, Nav, NavigLink } from 'styles/AppLayout.styled';

const AppLayout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <>
            <Logo to="https://www.themoviedb.org/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="TMDB Logo"
                width="140px"
              />
            </Logo>
          </>
          <NavigLink to="/">Home</NavigLink>
          <NavigLink to="/movies">Movies</NavigLink>
        </Nav>
        <hr />
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AppLayout;
