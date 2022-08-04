import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 0;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-image: url('./header.jpg');
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Navigation = styled.nav``;

export const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  margin-right: 20px;
  font-family: 'Metal Mania', cursive;
  font-size: 30px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  &.active {
    color: orangered;
    font-size: 40px;
  }
`;
