import React from 'react';
import { StyledHamburger } from './style';

export const Hamburger = ({ isOpen, setIsOpen }) => {
  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHamburger type='button' onClick={handleOpen} isOpen={isOpen}>
      <span className='bar' aria-hidden='true'></span>
      <span className='visually-hidden'>Open menu</span>
    </StyledHamburger>
  );
};
