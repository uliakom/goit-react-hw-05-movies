import styled from '@emotion/styled';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-right: 100px;
  padding-left: 100px;
  margin-left: -20px;
`;

export const CastItem = styled.li`
  flex-basis: calc ((100% - 4 * 30px) / 4);
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(0.7);
    cursor: pointer;
  }
`;

export const Info = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

export const Role = styled.p`
  font-family: 'Metal Mania', cursive;
  &:hover {
    color: orangered;
  }
`;
