import React, { useMemo, useState } from 'react';

import { formatCardGenresString, getImageUrl } from '../../utils';

import { Container, GenreContainer, MovieRate } from './styles';

import CardPlaceholder from '../../assets/moviecard-placeholder.png';

interface IProps {
  id: number;
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

  const movieImage = useMemo(() => {
    if (moviePosterPath) {
      return getImageUrl(moviePosterPath);
    }

    return CardPlaceholder;
  }, [moviePosterPath]);

  const genreString = formatCardGenresString(genres);

  return (
    <Container hasCoverImage={!!moviePosterPath}>
      <figure>
        <img
          src={movieImage}
          alt={title}
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
