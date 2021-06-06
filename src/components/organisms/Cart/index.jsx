import React, { useState } from 'react';
import { CartList } from './style';
import { Container } from '../../atoms/Container';
import { Heading } from '../../atoms/Heading';
import { Alert } from '../../atoms/Alert';
import { Button } from '../../atoms/Button';
import { CartItem } from '../../molecules/CartItem';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { useTitle } from '../../../hooks/useTitle';
import { actions } from '../../../utils/actions';
import { firestore } from '../../../firebase/firebase';

export const Cart = () => {
  useTitle('Cart');
  const [cart, dispatch] = useCart();
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleDeleteAll = () => {
    if (currentUser) {
      cart.forEach((cartItem) => {
        firestore.collection(currentUser.uid).doc(cartItem.slug).delete();
      });

      dispatch({
        type: actions.DELETE_ALL,
      });
    }
  };

  return (
    <Container>
      <Heading>Cart</Heading>
      <CartList>
        {cart.map((product) => (
          <CartItem key={product.slug} product={product} setError={setError} />
        ))}
      </CartList>
      {cart.length > 0 && (
        <>
          <p>
            Total cart value: $
            {cart.reduce((acc, obj) => {
              return acc + obj.price * obj.quantity;
            }, 0)}
          </p>
          <Button size='s' onClick={handleDeleteAll} mt={15}>
            clear cart
          </Button>
        </>
      )}
      {error && <Alert type='error'>{error}</Alert>}
      {cart.length <= 0 && <Alert type='info'>No products found</Alert>}
    </Container>
  );
};
