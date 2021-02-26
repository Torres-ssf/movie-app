import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { api } from '../../server/api';

import { MovieHero } from '../../components/MovieHero';
import { MovieListNavigation } from '../../components/MovieListNavigation';
import { MovieCard } from '../../components/MovieCard';

import { Container, MovieList } from './styles';
import { randomANumber } from '../../utils';
import LoadingContainer from '../../components/LoadingContainer';

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
  overview: string;
  vote_average: number;
}

export const Main: React.FC = () => {
  const [movies, setMovies] = useState([] as IMovieProperties[]);

  const [movieHero, setMovieHero] = useState({} as IMovieProperties);

  const [searchValue, setSearchValue] = useState('');

  const [sortType, setSortType] = useState<SortType>('popular');

  const [totalPages, setTotalPages] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);

  const movieContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sortType !== 'unselected') {
      const fetchMovieData = async () => {
        const response = await api.get(`movie/${sortType}`, {
          params: {
            page: currentPage,
          },
        });

        const { data } = response;

        const { results } = data;

        if (movies.length === 0) {
          setMovieHero(results[randomANumber(0, 19)]);
        }

        setMovies(results);

        setTotalPages(data.total_pages);

        if (loading) {
          setLoading(false);
        }
      };

      fetchMovieData();
    }
  }, [sortType, currentPage, loading, movies.length]);

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

    if (value === '') {
      setSortType('popular');
    } else {
      setSortType('unselected');
    }

    setSearchValue(value);
  }, []);

  const handleSortTypeChange = useCallback((type: SortType) => {
    setCurrentPage(1);
    setSearchValue('');
    setSortType(type);
  }, []);

  const handlePageChange = useCallback(({ selected: pageSelected }) => {
    setCurrentPage(pageSelected + 1);

    if (movieContainerRef.current) {
      movieContainerRef.current.scrollIntoView();
    }
  }, []);

  const movieList = movies.map(movie => (
    <li key={movie.id}>
      <MovieCard
        title={movie.title}
        genres={movie.genre_ids}
        posterPath={movie.poster_path}
        voteAvarage={movie.vote_average}
      />
    </li>
  ));

  if (loading) {
    return <LoadingContainer />;
  }

  return (
    <Container>
      <section>
        <MovieHero
          title={movieHero.title}
          posterPath={movieHero.poster_path}
          backdropPath={movieHero.backdrop_path}
          genres={movieHero.genre_ids}
          overview={movieHero.overview}
          voteAvarage={movieHero.vote_average}
        />
      </section>

      <section ref={movieContainerRef}>
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
      </section>
    </Container>
  );
};
