import { Outlet } from 'react-router-dom';
import { Container, Header, Navigation, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledNavLink to="/">HOME</StyledNavLink>
          <StyledNavLink to="/movies">MOVIES</StyledNavLink>
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
