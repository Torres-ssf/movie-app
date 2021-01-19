import styled from 'styled-components';

export const Container = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  margin: 10px;

  figure {
    img {
      border-radius: 5px;
      object-fit: cover;
      max-width: 100%;
    }
  }

  footer {
    background: white;
    border-radius: 0 0 5px 5px;
    bottom: 0;
    left: 0;
    padding: 16px;
    position: absolute;
    width: 100%;

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
