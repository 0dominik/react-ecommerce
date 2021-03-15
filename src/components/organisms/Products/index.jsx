import React, { useState, useEffect } from 'react';
import { Heading } from '../../atoms/Heading';
import { Button } from '../../atoms/Button';
import { Container } from '../../atoms/Container';
import { Filters } from '../../molecules/Filters';
import { ProductList } from '../../molecules/ProductList';
import { Pagination } from '../../molecules/Pagination';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import { useTitle } from '../../../hooks/useTitle';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphql/queries';
import { pageLimit } from '../../../utils/constants';
import { getNameFromSlug } from '../../../utils/helpers';
import PulseLoader from 'react-spinners/PulseLoader';

export const Products = () => {
  const { category } = useParams();
  useTitle(getNameFromSlug(category), [category]);
  const [pageNumber, setPageNumber] = useState(1);
  const theme = useTheme();

  const initialVariables = {
    category: category !== 'all' ? category : undefined,
    orderBy: undefined,
    skip: 0,
    minPrice: 0,
    maxPrice: 1000,
  };

  const [variables, setVariables] = useState(initialVariables);
  const [getProducts, { data: { products = [] } = {}, loading }] = useLazyQuery(GET_PRODUCTS);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(1);
    getProducts({ variables: initialVariables });
    setVariables(initialVariables);
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts({
      variables: { ...variables, skip: (pageNumber - 1) * pageLimit },
    });
  }, [pageNumber]);

  const applyFilters = () => {
    getProducts({ variables });
    setPageNumber(1);
  };

  return (
    <Container>
      <Heading>{getNameFromSlug(category)} products</Heading>
      <Filters setVariables={setVariables} category={category} />
      <Button onClick={applyFilters} size='s' type='button'>
        apply
      </Button>
      {loading ? (
        <PulseLoader color={theme.colors.primary} size={theme.loaderSize} css={{ marginTop: 100 }} />
      ) : (
        <>
          <ProductList products={products} />
          {(products.length >= pageLimit || pageNumber > 1) && <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} products={products} />}
        </>
      )}
    </Container>
  );
};
