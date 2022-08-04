import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
`;

export const Item = styled.li`
  flex-basis: calc ((100% - 4 * 30px) / 4);
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
    -webkit-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
    -moz-box-shadow: 10px 11px 10px -4px rgba(0, 0, 0, 0.48);
  }
`;

export const Image = styled.img`
  width: 360px;
  height: 450px;
  object-fit: cover;
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const Info = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.p`
  color: black;
  font-size: 12px;
  font-weight: 700;
`;

export const Vote = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 700;
`;
