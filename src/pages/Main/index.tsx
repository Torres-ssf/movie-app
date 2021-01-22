import React, { useCallback, useEffect, useState } from 'react';
import { api } from '../../server/api';

import { MovieListNavigation } from '../../components/MovieListNavigation';
import { MovieCard } from '../../components/MovieCard';

import { Container, MovieList } from './styles';

export type SortType =
  | 'popular'
  | 'top_rated'
  | 'upcoming'
  | 'now_playing'
  | 'unselected';

export const Main: React.FC = () => {
  const [movies, setMovies] = useState([] as any[]);
  const [sortType, setSortType] = useState<SortType>('popular');

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await api.get(`movie/${sortType}`);

      const {
        data: { results },
      } = response;

      setMovies(results);
    };

    fetchMovieData();
  }, [sortType]);

  const handleSortTypeChange = useCallback((type: SortType) => {
    setSortType(type);
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
      <MovieListNavigation
        selectedSortType={sortType}
        handleSortTypeChange={handleSortTypeChange}
      />
      <MovieList>{movieList}</MovieList>
    </Container>
  );
};
