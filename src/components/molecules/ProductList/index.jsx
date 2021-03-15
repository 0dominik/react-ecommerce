import React from 'react';
import { Alert } from '../../atoms/Alert';
import { ProductItem } from '../ProductItem';
import { Container } from './style';

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
      {products.length === 0 && <Alert type='error'>No products found</Alert>}
    </Container>
  );
};
