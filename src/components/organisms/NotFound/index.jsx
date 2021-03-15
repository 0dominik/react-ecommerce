import React from 'react';
import { StyledContainer } from './style';
import { Alert } from '../../atoms/Alert';

export const NotFound = () => {
  return (
    <StyledContainer>
      <Alert type='error'>This page cannot be found.</Alert>
    </StyledContainer>
  );
};
