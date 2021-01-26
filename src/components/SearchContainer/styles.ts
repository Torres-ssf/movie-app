import styled, { css } from 'styled-components';

interface MovieSearchContainerProps {
  visible: boolean;
}

export const Container = styled.div<MovieSearchContainerProps>`
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;

  ${props =>
    props.visible &&
    css`
      border: 2px solid #3899bf;
    `}

  @media (max-width: 900px) {
    margin-bottom: 10px;
    height: 42px;
  }

  input {
    background: transparent;
    border: none;
    height: 40px;
    width: 0;
    opacity: 0;
    transition: 500ms;

    ${props =>
      props.visible
        ? css`
            width: 172px;
            padding: 20px 10px;
            opacity: 1;
          `
        : css`
            width: 0px;
          `}
  }
`;

export const Button = styled.button`
  background-color: #3899bf;
  border-radius: 500px;
  border: none;
  margin-left: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
`;
