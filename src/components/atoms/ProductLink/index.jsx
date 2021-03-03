import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
