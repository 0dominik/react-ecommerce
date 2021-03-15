import React, { useState } from 'react';
import { SearchBar } from '../../molecules/SearchBar';
import { Alert } from '../../atoms/Alert';
import { Heading } from '../../atoms/Heading';
import { ProductItem } from '../../molecules/ProductItem';
import { Results } from './style';
import { Container } from '../../atoms/Container';
import PulseLoader from 'react-spinners/PulseLoader';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_PRODUCT } from '../../../graphql/queries';
import { useTheme } from '../../../hooks/useTheme';
import { useTitle } from '../../../hooks/useTitle';

export const Search = () => {
  useTitle('Search');
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const [getProducts, { loading }] = useLazyQuery(SEARCH_PRODUCT, {
    onCompleted: ({ products }) => {
      setProducts(products);

      if (products.length === 0) {
        setError('No products found');
      }
    },
  });

  return (
    <Container>
      <Heading>search products</Heading>
      <SearchBar getProducts={getProducts} setError={setError} setProducts={setProducts} />
      {loading ? (
        <PulseLoader color={theme.colors.primary} size={theme.loaderSize} css={{ marginTop: 20 }} />
      ) : error ? (
        <Alert type='error' mt={50}>
          {error}
        </Alert>
      ) : (
        <Results>
          {products.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </Results>
      )}
    </Container>
  );
};
