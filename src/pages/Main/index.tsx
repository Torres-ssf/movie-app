import React, { useEffect, useState } from 'react';
import { api } from '../../server/api';

import { Container } from './styles';

export const Main: React.FC = () => {
  const [movies, setMovies] = useState([] as any[]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await api.get(`movie/popular`);

      const {
        data: { results },
      } = response;

      setMovies(results);
    };

    fetchMovieData();
  }, []);

  const movieList = movies.map(movie => <li key={movie.id}>{movie.title}</li>);

  return (
    <Container>
      <h1>Movie App</h1>

      <ul>{movieList}</ul>
    </Container>
  );
};
