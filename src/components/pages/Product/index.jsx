import React from 'react';
import { Container, Img, SubContainer } from './style';
import { Alert } from '../../atoms/Alert';
import { Recommended } from '../../molecules/Recommended';
import { ProductInfo } from '../../molecules/ProductInfo';
import { useTitle } from '../../../hooks/useTitle';
import { useTheme } from '../../../hooks/useTheme';
import { GET_PRODUCT } from '../../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

export const Product = () => {
  const { slug } = useParams();
  const { data: { product, recommended } = {}, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      slug,
    },
  });

  const theme = useTheme();
  useTitle(product?.name || '', [product]);

  if (loading) {
    return (
      <Container>
        <PulseLoader color={theme.colors.primary} size={20} css={{ marginTop: '50vh' }} />
      </Container>
    );
  }

  return (
    <Container>
      {!product || error ? (
        <Alert type='error'>No product found</Alert>
      ) : (
        <>
          <Img src={product.image.url} alt={product.name} />
          <SubContainer>
            <ProductInfo product={product} />
            <Recommended products={recommended} />
          </SubContainer>
        </>
      )}
    </Container>
  );
};
