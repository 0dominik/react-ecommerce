import React, { useState } from 'react';
import { Form, StyledInput, Label, ClearButton, SearchButton } from './style';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar = ({ getProducts, setProducts, setError }) => {
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const [query, setQuery] = useState('');

  const handleInput = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length > 0) {
      setIsLabelVisible(false);
    } else {
      setIsLabelVisible(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length >= 3) {
      getProducts({ variables: { query } });
      setError('');
    } else {
      setError('Type more than 2 characters');
    }
  };

  const clearInput = () => {
    setQuery('');
    setIsLabelVisible(true);
    setProducts([]);
  };

  return (
    <Form onSubmit={handleSearch}>
      <StyledInput type='search' id='search' value={query} onChange={handleInput} />
      <Label htmlFor='search' isLabelVisible={isLabelVisible}>
        Type product that you are looking for...
      </Label>
      {query.length > 0 && (
        <>
          <SearchButton onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} aria-hidden='true' />
            <span className='visually-hidden'>Search</span>
          </SearchButton>
          <ClearButton onClick={clearInput}>
            <span aria-hidden='true'>✕</span>
            <span className='visually-hidden'>Delete phrase</span>
          </ClearButton>
        </>
      )}
    </Form>
  );
};
