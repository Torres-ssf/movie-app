import React from 'react';

import { Container, GenreContainer } from './styles';

export const MovieCard: React.FC = () => {
  return (
    <Container>
      <figure>
        <img
          src="https://image.tmdb.org/t/p/w342/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
          alt="movie name"
        />
      </figure>
      <footer>
        <p>Wonder Woman 1984 Wonder Woman 1984 Wonder Woman 1984 </p>
        <GenreContainer>Adventure, Action</GenreContainer>
      </footer>
    </Container>
  );
};
