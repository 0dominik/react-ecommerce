import React from 'react';
import { QuantityContainer, Label, QuantityValue, QuantityButton } from './style';

export const Quantity = ({ quantity, setQuantity, showLabel = true }) => {
  const increaseQuantity = () => {
    if (quantity < 100) {
      setQuantity((prevValue) => prevValue + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevValue) => prevValue - 1);
    }
  };

  return (
    <div>
      {showLabel && <Label>quantity</Label>}
      <QuantityContainer>
        <QuantityButton onClick={decreaseQuantity}>
          <span aria-hidden='true'>-</span>
          <span className='visually-hidden'>decrease quantity</span>
        </QuantityButton>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityButton onClick={increaseQuantity}>
          <span aria-hidden='true'>+</span>
          <span className='visually-hidden'>increase quantity</span>
        </QuantityButton>
      </QuantityContainer>
    </div>
  );
};
