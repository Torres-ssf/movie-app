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
