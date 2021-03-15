import styled from 'styled-components';

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ size }) => (size === 'l' ? '2.2rem' : '1.8rem')};
  font-weight: 700;
`;
