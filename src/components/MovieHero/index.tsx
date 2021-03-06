import React, { useMemo, useState } from 'react';

import { formatImageUrl, extractGenres } from '../../utils';

import {
  Container,
  MovieInfo,
  MovieInfoContainer,
  MovieRating,
  Poster,
} from './styles';

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
  const [posterPathState, setPosterPathState] = useState(posterPath);

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
    const posterUrl = posterPathState
      ? formatImageUrl({ path: posterPathState })
      : ImagePlaceholder;

    return (
      <Poster
        src={posterUrl}
        alt={`${title} cover image`}
        onError={() => {
          setPosterPathState(ImagePlaceholder);
        }}
      />
    );
  }, [title, posterPathState]);

  return (
    <Container backdropUrl={imageUrl}>
      <MovieInfoContainer>
        {posterImage}
        <MovieInfo>
          <h1>{title}</h1>
          <div>
            <MovieRating rating={voteAvarage}>{voteAvarage}</MovieRating>
            {genresList}
          </div>
          <p>{overview}</p>
        </MovieInfo>
      </MovieInfoContainer>
    </Container>
  );
};
