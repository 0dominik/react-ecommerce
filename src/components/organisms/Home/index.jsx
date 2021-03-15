import React from 'react';
import { Button } from '../../atoms/Button';
import { Container, Title, Subtitle, ShadowText } from './style';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Title>olios</Title>
      <Subtitle>funiture and accesories shop</Subtitle>
      <ShadowText>newest</ShadowText>
      <Button onClick={() => history.push('/products/all')} type='button'>
        see products
      </Button>
    </Container>
  );
};
