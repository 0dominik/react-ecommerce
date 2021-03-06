import React, { useState, useEffect } from 'react';
import { SearchBar } from '../../molecules/SearchBar';
import { Alert } from '../../atoms/Alert';
import { Heading } from '../../atoms/Heading';
import { ProductItem } from '../../molecules/ProductItem';
import { Container, Results } from './style';
import PulseLoader from 'react-spinners/PulseLoader';
import { useQuery } from '@apollo/client';
import { SEARCH_PRODUCT } from '../../../graphql/queries';
import { useDebounce } from '../../../hooks/useDebounce';
import { useTheme } from '../../../hooks/useTheme';
import { useTitle } from '../../../hooks/useTitle';

export const Search = () => {
  useTitle('Search');
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(true);
  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query, 300);

  const { loading } = useQuery(SEARCH_PRODUCT, {
    variables: { query: debouncedQuery },
    skip: skip,
    onCompleted: (data) => {
      setProducts(data.products);
    },
  });

  useEffect(() => {
    if (query.length >= 3) {
      setSkip(false);
    } else {
      setSkip(true);
      setProducts([]);
    }
  }, [query]);

  return (
    <Container>
      <Heading>search products</Heading>
      <SearchBar query={query} setQuery={setQuery} setProducts={setProducts} />
      {loading ? (
        <PulseLoader color={theme.colors.primary} size={20} css={{ marginTop: 100 }} />
      ) : (
        <Results>
          {query.length === debouncedQuery.length ? products.map((product) => <ProductItem key={product.slug} product={product} />) : products.length > 0 && <PulseLoader color={theme.colors.primary} size={20} css={{ marginTop: 100 }} />}
          {products.length === 0 && query.length >= 3 && debouncedQuery.length >= 3 && (
            <Alert type='error' style={{ marginTop: 50 }}>
              No products found
            </Alert>
          )}
        </Results>
      )}
    </Container>
  );
};
