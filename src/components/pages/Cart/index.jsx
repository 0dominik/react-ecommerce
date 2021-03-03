import React, { useState } from 'react';
import { Container, CartList } from './style';
import { Heading } from '../../atoms/Heading';
import { CartItem } from '../../molecules/CartItem';
import { Button } from '../../atoms/Button';
import { useCart } from '../../../context/CartContext';
import { actions } from '../../../utils/actions';
import { firestore } from '../../../firebase/firebase';
import { useAuth } from '../../../context/AuthContext';
import { useTitle } from '../../../hooks/useTitle';

export const Cart = () => {
  useTitle('Cart');
  const [cart, dispatch] = useCart();
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleDeleteAll = () => {
    cart.forEach((el) => {
      firestore.collection(currentUser.uid).doc(el.slug).delete();
    });

    dispatch({
      type: actions.DELETE_ALL,
    });
  };

  return (
    <Container>
      <Heading>Cart</Heading>
      {!cart.length && 'is empty'}
      <CartList>
        {cart.map((product) => (
          <CartItem key={product.slug} product={product} setError={setError} />
        ))}
      </CartList>
      {cart.length > 0 && (
        <Button size='s' onClick={handleDeleteAll} mt={20}>
          clear cart
        </Button>
      )}
      {error}
    </Container>
  );
};
