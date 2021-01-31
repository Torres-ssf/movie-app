import { movieGenresObject } from '../constants';

export const extractGenresToString = (genresArray: number[]): string => {
  if (genresArray) {
    const genreString = genresArray.map(genre => {
      return movieGenresObject[genre];
    });

    return genreString.join(', ');
  }

  return 'Genre not specified';
};

export const extractGenres = (genresArray: number[]): Array<string> => {
  return genresArray.map(genre => movieGenresObject[genre]);
};

export const randomANumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const formatImageUrl = ({
  path,
  size = 'w342',
}: {
  path: string;
  size?: string;
}): string => {
  const imageBaseUrl = process.env.REACT_APP_API_IMAGE_URL;

  return `${imageBaseUrl}/${size}/${path}`;
};
