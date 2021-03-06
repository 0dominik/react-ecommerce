import React from 'react';
import { StyledUl, StyledLink } from './style';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../../graphql/queries';

export const MenuList = () => {
  const { pathname } = useLocation();

  const { data: { categories = [] } = {}, error } = useQuery(GET_CATEGORIES);

  if (error) {
    return <p>Failed to get categories</p>;
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
