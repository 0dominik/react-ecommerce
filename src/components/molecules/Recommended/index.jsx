import React from 'react';
import { ProductItem } from '../ProductItem';
import { Heading, Container } from './style';

export const Recommended = ({ products }) => {
  return (
    <Container>
      <Heading>recommended</Heading>
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} margin='0px' />
      ))}
    </Container>
  );
};
