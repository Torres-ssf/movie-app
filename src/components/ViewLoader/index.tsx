import React from 'react';

import { Container } from './styles';

export const ViewLoader: React.FC = () => {
  return (
    <Container
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      viewBox="0 0 342 513"
      speed={2}
    >
      <rect x="0" y="0" width="342" height="513" />
    </Container>
  );
};
