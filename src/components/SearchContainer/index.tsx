import React, { useCallback, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, Button } from './styles';

interface IProps {
  handleSearchValueChange: (value: string) => void;
  searchValue: string;
}

export const SearchContainer: React.FC<IProps> = ({
  searchValue,
  handleSearchValueChange,
}) => {
  const [active, setActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchButtonClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    setActive(oldState => !oldState);
  }, []);

  return (
    <Container visible={active}>
      <Button type="button" onClick={() => handleSearchButtonClick()}>
        <FiSearch size={18} color="#fff" />
      </Button>

      <input
        ref={inputRef}
        value={searchValue}
        onChange={({ target }) => handleSearchValueChange(target.value)}
        name="search-movie"
        placeholder="Movie title"
        autoComplete="false"
      />
    </Container>
  );
};
