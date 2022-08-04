import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Title = styled.p`
  margin-right: 30px;
  font-family: 'Metal Mania', cursive;
  font-size: 40px;
  &:hover {
    color: oranged;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 10px;
  border: 0;
  background-color: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: oranged;
  }
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 30px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-width: 3px;
  border-image: linear-gradient(to right, orange, black, orange);
  border-image-slice: 2;
  background: transparent;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Error = styled.h2`
  text-align: center;
  margin-top: 100px;
`;
