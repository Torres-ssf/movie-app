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

export const randomANumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const formatImageUrl = (path: string, size = 'w342'): string => {
  const imageBaseUrl = process.env.REACT_APP_API_IMAGE_URL;

  return `${imageBaseUrl}/${size}/${path}`;
};
