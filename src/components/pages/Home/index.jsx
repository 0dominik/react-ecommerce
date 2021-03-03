import React from 'react';
import { Button } from '../../../components/atoms/Button';
import { Container, Title, Subtitle, ShadowText } from './style';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <Title>olios</Title>
      <Subtitle>newest funiture shop template</Subtitle>
      <ShadowText>newest</ShadowText>

      <Link to='/products/all'>
        <Button type='button'>see products</Button>
      </Link>
    </Container>
  );
};
