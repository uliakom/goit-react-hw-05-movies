import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 30px;
  //   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  //     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  //   &:hover {
  //     transform: scale(1.03);
  //     cursor: pointer;
  //     box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
  //     -webkit-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
  //     -moz-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
  //   }
`;

export const ImageWrap = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 360px;
  height: 450px;
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  &:hover {
    transform: scale(0.6);
  }
`;

export const InfoWrap = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 30px;
  p {
    margin-bottom: 20px;
  }
`;

export const Description = styled.p``;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Raiting = styled.div`
  display: flex;
  margin-bottom: 30px;
  p {
    margin-right: 20px;
  }
`;

export const OtherInfo = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
`;

export const StyledNavLink = styled(NavLink)`
  width: 40px;
  margin-right: 20px;
  padding: 5px;
  color: orangered;
  font-weight: 500;
  font-size: 20px;
  border-radius: 4px;
  outline: none;
  text-decoration: none;
  &.active {
    color: #ffffff;
    background-color: orangered;
  }
  &:hover,
  &:focus {
    color: #ffffff;
    background-color: orangered;
  }
`;
