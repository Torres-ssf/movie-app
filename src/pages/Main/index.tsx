import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
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

interface IMovieProperties {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: Array<number>;
  vote_average: number;
}

export const Main: React.FC = () => {
  const [movies, setMovies] = useState([] as IMovieProperties[]);

  const [searchValue, setSearchValue] = useState('');

  const [sortType, setSortType] = useState<SortType>('popular');

  const [totalPages, setTotalPages] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await api.get(`movie/${sortType}`, {
        params: {
          page: currentPage,
        },
      });

      const { data } = response;

      const { results } = data;

      setTotalPages(data.total_pages);

      setMovies(results);
    };

    fetchMovieData();
  }, [sortType, currentPage]);

  useEffect(() => {
    if (searchValue !== '') {
      const fetchMovieData = async () => {
        const response = await api.get(`search/movie`, {
          params: {
            query: searchValue,
            page: currentPage,
          },
        });

        const { results, total_pages } = response.data;

        setMovies(results);

        setTotalPages(total_pages);
      };

      fetchMovieData();
    }
  }, [searchValue, currentPage]);

  const handleSearchValueChange = useCallback((value: string) => {
    setCurrentPage(1);
    setSortType('unselected');
    setSearchValue(value);
  }, []);

  const handleSortTypeChange = useCallback((type: SortType) => {
    setCurrentPage(1);
    setSortType(type);
  }, []);

  const handlePageChange = useCallback(({ selected: pageSelected }) => {
    setCurrentPage(pageSelected + 1);
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
        searchValue={searchValue}
        selectedSortType={sortType}
        handleSortTypeChange={handleSortTypeChange}
        handleSearchValueChange={handleSearchValueChange}
      />
      <MovieList>{movieList}</MovieList>

      <ReactPaginate
        containerClassName="paginatate-list"
        previousLabel="back"
        nextLabel="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={totalPages}
        forcePage={currentPage - 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName="active"
        onPageChange={handlePageChange}
      />
    </Container>
  );
};
