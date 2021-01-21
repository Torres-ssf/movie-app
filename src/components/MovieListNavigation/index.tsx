import React from 'react';

import { Container } from './styles';

export const MovieListNavigation: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <button type="button" value="popular">
            Popular
          </button>
        </li>
        <li>
          <button type="button" value="top_rated">
            Top Rated
          </button>
        </li>
        <li>
          <button type="button" value="upcoming">
            Upcoming
          </button>
        </li>
        <li>
          <button type="button" value="now_playing">
            Now Playing
          </button>
        </li>
      </ul>
    </Container>
  );
};
