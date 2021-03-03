import React from 'react';
import { StyledSidebar, Logo, IconsContainer, IconLink } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <StyledSidebar>
      <IconLink to='/'>
        <Logo src='/img/logo.png' alt='logo' />
      </IconLink>
      <IconsContainer>
        <IconLink to='/' $isActive={pathname === '/'}>
          <FontAwesomeIcon icon={faHome} aria-hidden='true' />
          <span className='visually-hidden'>Home</span>
        </IconLink>
        <IconLink to='/cart' $isActive={pathname === '/cart'}>
          <FontAwesomeIcon icon={faShoppingCart} aria-hidden='true' />
          <span className='visually-hidden'>Cart</span>
        </IconLink>
        <IconLink to='/search' $isActive={pathname === '/search'}>
          <FontAwesomeIcon icon={faSearch} aria-hidden='true' />
          <span className='visually-hidden'>Search</span>
        </IconLink>
      </IconsContainer>
    </StyledSidebar>
  );
};
