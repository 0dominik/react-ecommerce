import React from 'react';
import { Container } from './style';
import { Alert } from '../../atoms/Alert';

export const NotFound = () => {
  return (
    <Container>
      <Alert type='error'>The page cannot be found</Alert>
    </Container>
  );
};
