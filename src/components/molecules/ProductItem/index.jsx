import React from 'react';
import { Container, Name, Description, Img, Title } from './style';
import { Price } from '../../atoms/Price';
import { ProductLink } from '../../atoms/ProductLink';

export const ProductItem = ({ product }) => {
  return (
    <Container>
      <ProductLink to={`/product/${product.slug}`}>
        <Img src={product.image.url} alt={product.name} isSold={product.isSold} />
      </ProductLink>
      <div>
        <Name>
          <ProductLink to={`/product/${product.slug}`}>
            {product.isSold && '[SOLD] '}
            <Title isSold={product.isSold}>{product.name}</Title>
          </ProductLink>
        </Name>
        <Description>{product.description.length > 40 ? `${product.description.slice(0, 40)}...` : product.description}</Description>
        <Price>${product.price}</Price>
      </div>
    </Container>
  );
};
