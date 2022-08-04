import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-right: 200px;
  margin-top: 15px;
  font-family: 'Metal Mania', cursive;
  font-size: 40px;
  text-align: right;
  &:hover {
    color: oranged;
  }
  span {
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.05);
      cursor: zoom-in;
    }
  }
`;

export const Error = styled.h2`
  text-align: center;
  margin-top: 100px;
`;
