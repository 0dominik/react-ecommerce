import React, { useState } from 'react';
import { Container, StyledInput, Label, ClearButton } from './style';

export const SearchBar = ({ query, setQuery }) => {
  const [isLabelVisible, setIsLabelVisible] = useState(true);

  const handleInput = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setIsLabelVisible(false);
    } else {
      setIsLabelVisible(true);
    }
  };

  const clearInput = () => {
    setQuery('');
    setIsLabelVisible(true);
  };

  return (
    <Container>
      <StyledInput type='text' id='search' value={query} onChange={handleInput} />
      <Label htmlFor='search' isLabelVisible={isLabelVisible}>
        Type product that you are looking for...
      </Label>
      {query.length > 0 && (
        <ClearButton onClick={clearInput}>
          <span aria-hidden='true'>✕</span>
          <span className='visually-hidden'>Delete phrase</span>
        </ClearButton>
      )}
    </Container>
  );
};
