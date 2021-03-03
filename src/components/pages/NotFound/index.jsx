import React from 'react';
import { Container } from './style';
import { Alert } from '../../../components/atoms/Alert';

export const NotFound = () => {
  return (
    <Container>
      <Alert type='error'>The page cannot be found</Alert>
    </Container>
  );
};
