import { movieGenresObject } from '../constants';

export const formatCardGenresString = (genresArray: number[]): string => {
  if (genresArray) {
    const genreString = genresArray.map(genre => {
      return movieGenresObject[genre];
    });

    return genreString.join(', ');
  }

  return 'Genre not specified';
};

export const getImageUrl = (path: string): string => {
  const imageBaseUrl = process.env.REACT_APP_API_IMAGE_URL;

  return `${imageBaseUrl}/w342/${path}`;
};
