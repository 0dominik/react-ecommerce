import React from 'react';
import { Container, Logo, IconsContainer, IconLink, CartCounter } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';

export const Navigation = () => {
  const { pathname } = useLocation();
  const [cart] = useCart();
  const { currentUser } = useAuth();

  return (
    <Container>
      <IconLink to='/'>
        <Logo src='/img/logo.png' alt='round, blue logo' />
      </IconLink>
      <IconsContainer>
        <IconLink to='/' $isActive={pathname === '/'}>
          <FontAwesomeIcon icon={faHome} aria-hidden='true' />
          <span className='visually-hidden'>Home</span>
        </IconLink>
        <IconLink to='/cart' $isActive={pathname === '/cart'}>
          <FontAwesomeIcon icon={faShoppingCart} aria-hidden='true' />
          <span className='visually-hidden'>Cart</span>
          {currentUser && <CartCounter>{cart.length}</CartCounter>}
        </IconLink>
        <IconLink to='/search' $isActive={pathname === '/search'}>
          <FontAwesomeIcon icon={faSearch} aria-hidden='true' />
          <span className='visually-hidden'>Search</span>
        </IconLink>
      </IconsContainer>
    </Container>
  );
};
