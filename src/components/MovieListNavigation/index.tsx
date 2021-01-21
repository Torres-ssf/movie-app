import React from 'react';

import { SortType } from '../../pages/Main';

import { Container, ListItem } from './styles';

interface IProps {
  selectedSortType: SortType;
  handleSortTypeChange: (type: SortType) => void;
}

export const MovieListNavigation: React.FC<IProps> = ({
  selectedSortType,
  handleSortTypeChange,
}) => {
  return (
    <Container>
      <select
        value={selectedSortType}
        onChange={e => handleSortTypeChange(e.target.value as SortType)}
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
        <option value="now_playing">Now Playing</option>
        <option value="unselected" hidden disabled>
          Unselected
        </option>
      </select>

      <ul>
        <ListItem selected={selectedSortType === 'popular'}>
          <button type="button" onClick={() => handleSortTypeChange('popular')}>
            Popular
          </button>
        </ListItem>
        <ListItem selected={selectedSortType === 'top_rated'}>
          <button
            type="button"
            onClick={() => handleSortTypeChange('top_rated')}
          >
            Top Rated
          </button>
        </ListItem>
        <ListItem selected={selectedSortType === 'upcoming'}>
          <button
            type="button"
            onClick={() => handleSortTypeChange('upcoming')}
          >
            Upcoming
          </button>
        </ListItem>
        <ListItem selected={selectedSortType === 'now_playing'}>
          <button
            type="button"
            onClick={() => handleSortTypeChange('now_playing')}
          >
            Now Playing
          </button>
        </ListItem>
      </ul>
    </Container>
  );
};
