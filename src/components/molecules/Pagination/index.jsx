import React from 'react';
import { PageContainer, PageNumber } from './style';
import { Button } from '../../atoms/Button';
import { pageLimit } from '../../../utils/constants';

export const Pagination = ({ pageNumber, setPageNumber, products }) => {
  const handleNextPage = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  const handlePrevPage = () => {
    setPageNumber((prevState) => prevState - 1);
  };

  return (
    <PageContainer>
      <Button size='s' type='button' onClick={handlePrevPage} disabled={pageNumber <= 1}>
        Prev
      </Button>
      <PageNumber>{pageNumber}</PageNumber>
      <Button size='s' type='button' onClick={handleNextPage} disabled={products.length < pageLimit}>
        Next
      </Button>
    </PageContainer>
  );
};
