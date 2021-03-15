import React, { useState, useEffect } from 'react';
import { Container, Label, SortContainer, RadioInput, PriceContainer, PriceInput } from './style';
import { sortTypes } from '../../../utils/constants';

export const Filters = ({ setVariables, category }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortType, setSortType] = useState(sortTypes.auto);

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSortType(sortTypes.auto);
  }, [category]);

  useEffect(() => {
    setVariables((prevState) => ({ ...prevState, minPrice: parseInt(minPrice), maxPrice: parseInt(maxPrice), orderBy: sortType !== sortTypes.auto ? sortType : undefined }));
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
      <PriceContainer>
        <h3>Price</h3>
        <Label htmlFor='price-from'>
          From ($):
          <PriceInput value={minPrice} min='0' type='number' id='price-from' onChange={handleMinPrice} />
        </Label>
        <Label htmlFor='price-to'>
          To ($):
          <PriceInput value={maxPrice} min='0' type='number' id='price-to' onChange={handleMaxPrice} />
        </Label>
      </PriceContainer>
      <SortContainer>
        <h3>Sort by</h3>
        <label htmlFor='price-asc'>
          <RadioInput value={sortTypes.asc} type='radio' id='price-asc' checked={sortType === sortTypes.asc} onChange={handleSort} />
          Price ascending
        </label>
        <label htmlFor='price-desc'>
          <RadioInput value={sortTypes.desc} type='radio' id='price-desc' checked={sortType === sortTypes.desc} onChange={handleSort} />
          Price descending
        </label>
        <label htmlFor='auto'>
          <RadioInput value={sortTypes.auto} type='radio' id='auto' checked={sortType === sortTypes.auto} onChange={handleSort} />
          Auto
        </label>
      </SortContainer>
    </Container>
  );
};
