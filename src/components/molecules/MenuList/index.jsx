import React from 'react';
import { StyledUl, StyledLink } from './style';
import { Alert } from '../../atoms/Alert';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../../graphql/queries';

export const MenuList = () => {
  const { pathname } = useLocation();

  const { data: { categories = [] } = {}, error } = useQuery(GET_CATEGORIES);

  if (error) {
    return <Alert type='error'>Failed to get categories</Alert>;
  }

  return (
    <StyledUl>
      <li>
        <StyledLink to='/products/all' $isActive={pathname === `/products/all`}>
          all categories
        </StyledLink>
      </li>
      {categories.map(({ name, slug }) => (
        <li key={name}>
          <StyledLink to={`/products/${slug}`} $isActive={pathname === `/products/${slug}`}>
            {name}
          </StyledLink>
        </li>
      ))}
    </StyledUl>
  );
};
