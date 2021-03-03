import React, { useState, useEffect } from 'react';
import { Heading } from '../../atoms/Heading';
import { Button } from '../../atoms/Button';
import { Filters } from '../../molecules/Filters';
import { ProductList } from '../../organisms/ProductList';
import { Container, PageContainer, PageNumber } from './style';
import { useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from '../../../hooks/useTheme';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphql/queries';
import { pageLimit } from '../../../utils/constants';
import { getNameFromSlug } from '../../../utils/helpers';
import { useTitle } from '../../../hooks/useTitle';

export const Products = () => {
  const { category } = useParams();
  useTitle(getNameFromSlug(category), [category]);
  const [pageNumber, setPageNumber] = useState(1);
  const theme = useTheme();

  const startVariables = {
    category: category !== 'all' ? category : undefined,
    orderBy: undefined,
    skip: 0,
    minPrice: 0,
    maxPrice: 1000,
  };

  const [variables, setVariables] = useState(startVariables);
  const [getProducts, { data: { products = [] } = {}, loading }] = useLazyQuery(GET_PRODUCTS, {
    variables: startVariables,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageNumber(1);
    getProducts({
      variables: startVariables,
    });
    setVariables(startVariables);
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts({
      variables: { ...variables, skip: (pageNumber - 1) * pageLimit },
    });
  }, [pageNumber]);

  const handleNextPage = () => {
    setPageNumber((prevState) => prevState + 1);
  };

  const handlePrevPage = () => {
    setPageNumber((prevState) => prevState - 1);
  };

  const applyFilters = () => {
    getProducts({
      variables,
    });

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
        <PulseLoader color={theme.colors.primary} size={20} css={{ marginTop: 50 }} />
      ) : (
        <>
          <ProductList products={products} />
          {(products.length >= pageLimit || pageNumber > 1) && (
            <PageContainer>
              <Button size='s' type='button' onClick={handlePrevPage} disabled={pageNumber <= 1}>
                Prev
              </Button>
              <PageNumber>{pageNumber}</PageNumber>
              <Button size='s' type='button' onClick={handleNextPage} disabled={products.length < pageLimit}>
                Next
              </Button>
            </PageContainer>
          )}
        </>
      )}
    </Container>
  );
};
