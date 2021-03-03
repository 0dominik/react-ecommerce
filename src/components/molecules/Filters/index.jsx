import React, { useState, useEffect } from 'react';
import { Container, Label, SortContainer, RadioInput, FilterContainer } from './style';
import { QuantityInput } from '../../atoms/QuantityInput';

export const Filters = ({ setVariables, category }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortType, setSortType] = useState('auto');

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSortType('auto');
  }, [category]);

  useEffect(() => {
    setVariables((prevState) => ({ ...prevState, minPrice: parseInt(minPrice), maxPrice: parseInt(maxPrice), orderBy: sortType !== 'auto' ? sortType : undefined }));
  }, [minPrice, maxPrice, sortType]);

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <Container>
      <FilterContainer>
        <h3>Price</h3>
        <Label htmlFor='price-from'>
          From ($):
          <QuantityInput size='l' value={minPrice} min='0' type='number' id='price-from' onChange={handleMinPrice} />
        </Label>
        <Label htmlFor='price-to'>
          To ($):
          <QuantityInput size='l' value={maxPrice} min='0' type='number' id='price-to' onChange={handleMaxPrice} />
        </Label>
      </FilterContainer>
      <SortContainer>
        <h3>Sort by</h3>
        <label htmlFor='price-asc'>
          <RadioInput value='price_ASC' type='radio' id='price-asc' checked={sortType === 'price_ASC'} onChange={handleSort} />
          Price ascending
        </label>
        <label htmlFor='price-desc'>
          <RadioInput value='price_DESC' type='radio' id='price-desc' checked={sortType === 'price_DESC'} onChange={handleSort} />
          Price descending
        </label>
        <label htmlFor='auto'>
          <RadioInput value='auto' type='radio' id='auto' checked={sortType === 'auto'} onChange={handleSort} />
          Auto
        </label>
      </SortContainer>
    </Container>
  );
};
