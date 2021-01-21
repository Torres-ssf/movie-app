import React, { useEffect, useState } from 'react';
import { api } from '../../server/api';

import { MovieCard } from '../../components/MovieCard';

import { Container, MovieList } from './styles';

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

  const movieList = movies.map(movie => (
    <li key={movie.id}>
      <MovieCard
        id={movie.id}
        title={movie.title}
        genres={movie.genre_ids}
        posterPath={movie.poster_path}
        voteAvarage={movie.vote_average}
      />
    </li>
  ));

  return (
    <Container>
      <h1>Movie App</h1>

      <MovieList>{movieList}</MovieList>
    </Container>
  );
};
