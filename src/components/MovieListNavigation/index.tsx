import React from 'react';
import { SearchContainer } from '../SearchContainer';

import { SortType } from '../../pages/Main';
import { Container, ListItem, Button } from './styles';

interface IProps {
  selectedSortType: SortType;
  searchValue: string;
  handleSortTypeChange: (type: SortType) => void;
  handleSearchValueChange: (value: string) => void;
}

export const MovieListNavigation: React.FC<IProps> = ({
  selectedSortType,
  searchValue,
  handleSortTypeChange,
  handleSearchValueChange,
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
          <Button type="button" onClick={() => handleSortTypeChange('popular')}>
            Popular
          </Button>
        </ListItem>
        <ListItem selected={selectedSortType === 'top_rated'}>
          <Button
            type="button"
            onClick={() => handleSortTypeChange('top_rated')}
          >
            Top Rated
          </Button>
        </ListItem>
        <ListItem selected={selectedSortType === 'upcoming'}>
          <Button
            type="button"
            onClick={() => handleSortTypeChange('upcoming')}
          >
            Upcoming
          </Button>
        </ListItem>
        <ListItem selected={selectedSortType === 'now_playing'}>
          <Button
            type="button"
            onClick={() => handleSortTypeChange('now_playing')}
          >
            Now Playing
          </Button>
        </ListItem>
      </ul>
      <SearchContainer
        searchValue={searchValue}
        handleSearchValueChange={handleSearchValueChange}
      />
    </Container>
  );
};
