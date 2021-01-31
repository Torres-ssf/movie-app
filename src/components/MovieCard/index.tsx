import React, { useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ViewLoader } from '../ViewLoader';

import { extractGenresToString, formatImageUrl } from '../../utils';

import { Container, GenreContainer, MovieRate } from './styles';

import CardPlaceholder from '../../assets/moviecard-placeholder.png';

interface IProps {
  title: string;
  genres: Array<number>;
  posterPath: string | null;
  voteAvarage: number;
}

export const MovieCard: React.FC<IProps> = ({
  title,
  genres,
  posterPath,
  voteAvarage,
}) => {
  const [moviePosterPath, setMoviePosterPath] = useState(posterPath);
  const [loading, setLoading] = useState(true);

  const movieImage = useMemo(() => {
    if (moviePosterPath) {
      return formatImageUrl({ path: moviePosterPath });
    }

    return CardPlaceholder;
  }, [moviePosterPath]);

  const genreString = extractGenresToString(genres);

  return (
    <Container hasCoverImage={!!moviePosterPath}>
      <figure>
        {loading && <ViewLoader />}
        <LazyLoadImage
          src={movieImage}
          alt={title}
          threshold={400}
          onLoad={() => setLoading(false)}
          onError={() => setMoviePosterPath(CardPlaceholder)}
        />
      </figure>
      <footer>
        <p>{title}</p>
        <GenreContainer>{genreString}</GenreContainer>
        <MovieRate>{voteAvarage}</MovieRate>
      </footer>
    </Container>
  );
};
