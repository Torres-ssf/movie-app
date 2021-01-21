import styled, { css } from 'styled-components';

interface IContainerProps {
  hasCoverImage: boolean;
}

export const Container = styled.article<IContainerProps>`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;
  margin: 10px;
  overflow: hidden;
  transition: 500ms;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  ${props => {
    if (props.hasCoverImage) {
      return css`
        &:hover footer {
          transform: translateY(100%);
          opacity: 0;
        }
      `;
    }
    return css`
      background-color: #3899bf;
    `;
  }}

  figure {
    img {
      border-radius: 10px;
      object-fit: cover;
      max-width: 100%;
      vertical-align: middle;
    }
  }

  footer {
    background: white;
    border-radius: 0 0 10px 10px;
    bottom: 0;
    left: 0;
    padding: 16px;
    position: absolute;
    width: 100%;
    transition: 500ms;

    p {
      color: black;
      font-weight: 500;
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      margin-top: 4px;
      width: 80%;
      text-overflow: ellipsis;
    }
  }
`;

export const GenreContainer = styled.span`
  display: block;
  font-size: 0.8rem;
  margin-top: 8px;
  color: #3899bf;
`;

export const MovieRate = styled.span`
  border: 2px solid #3899bf;
  border-radius: 4px;
  color: #3899bf;
  display: block;
  font-weight: 500;
  font-size: 0.9rem;
  position: absolute;
  margin-top: 8px;
  right: 16px;
  top: 8px;
  padding: 4px 8px;
`;
