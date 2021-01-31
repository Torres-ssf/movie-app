import React, { useMemo, useState } from 'react';

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
