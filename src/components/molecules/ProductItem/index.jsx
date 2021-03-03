import React from 'react';
import { Container, Name, Price, Description, Img, Title } from './style';
import { ProductLink } from '../../../components/atoms/ProductLink';

export const ProductItem = ({ product, margin }) => {
  return (
    <Container margin={margin}>
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
