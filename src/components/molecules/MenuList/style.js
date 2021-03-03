import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUl = styled.ul`
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.5px;
  list-style: none;

  li {
    margin: 20px 0;

    a {
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary : theme.colors.darkGray)};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
