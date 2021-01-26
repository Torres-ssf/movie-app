import React, { useMemo } from 'react';
import { formatImageUrl, extractGenres } from '../../utils';

import { Container, MovieInfo, Poster } from './styles';

import ImagePlaceholder from '../../assets/image-placeholder.png';

interface IProps {
  title: string;
  genres: Array<number>;
  backdropPath: string;
  posterPath: string | null;
  overview: string;
  voteAvarage: number;
}

export const MovieHero: React.FC<IProps> = ({
  title,
  genres,
  backdropPath,
  posterPath,
  overview,
  voteAvarage,
}) => {
  const imageUrl = formatImageUrl({ path: backdropPath, size: 'original' });

  const genresList = useMemo(() => {
    const genresArr = genres ? extractGenres(genres) : [];

    return (
      <ul>
        {genresArr.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }, [genres]);

  const posterImage = useMemo(() => {
    const posterUrl = posterPath
      ? formatImageUrl({ path: posterPath })
      : ImagePlaceholder;

    return <Poster src={posterUrl} alt={`${title} image cover`} />;
  }, [title, posterPath]);

  return (
    <Container backdropUrl={imageUrl}>
      <MovieInfo>
        {posterImage}
        <div>
          <h1>{title}</h1>
          {genresList}
          <p>{overview}</p>
        </div>
      </MovieInfo>
    </Container>
  );
};