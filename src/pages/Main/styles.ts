import styled from 'styled-components';

export const Container = styled.main``;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 1650px) {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }

  @media (max-width: 1380px) {
    grid-template-columns: 25% 25% 25% 25%;
  }

  @media (max-width: 1380px) {
    grid-template-columns: 25% 25% 25% 25%;
  }

  @media (max-width: 1020px) {
    grid-template-columns: 33% 33% 33%;
  }

  @media (max-width: 720px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;
