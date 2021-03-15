import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button';
import { Alert } from '../../atoms/Alert';
import { Price } from '../../atoms/Price';
import { Quantity } from '../Quantity';
import { Container, Name, Description, SubContainer, PriceContainer, QuantityContainer } from './style';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useAuth } from '../../../context/AuthContext';
import { actions } from '../../../utils/actions';
import { firestore } from '../../../firebase/firebase';

export const ProductInfo = ({ product, loading }) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [cart, dispatch] = useCart();
  const { currentUser } = useAuth();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMessage('');
    setError('');
  }, [product]);

  useEffect(() => {
    const item = cart.find((cartProduct) => product.slug === cartProduct.slug);

    if (!loading && product && item) {
      setQuantity(item.quantity);
      setIsInCart(true);
    } else {
      setQuantity(1);
      setIsInCart(false);
    }
  }, [product, cart]);

  const addProduct = () => {
    if (currentUser && !product.isSold) {
      const newProduct = {
        name: product.name,
        price: product.price,
        image: product.image.url,
        slug: product.slug,
        quantity: parseInt(quantity),
      };

      firestore.collection(currentUser.uid).doc(product.slug).set(newProduct);
      dispatch({
        type: actions.ADD_PRODUCT,
        product: newProduct,
      });
      setMessage('Product successfully added to cart');
    } else {
      setError('You have to log in to add product to cart.');
    }
  };

  return (
    <Container>
      <Name isSold={product.isSold}>
        {product.isSold && '[SOLD] '}
        <span className='hl'>{product.name}</span> - {product.category.name}
      </Name>
      <Description>{product.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem commodi tempora voluptatibus veniam</Description>
      <SubContainer>
        <PriceContainer>
          cost
          <Price size='l'>${product.price}</Price>
        </PriceContainer>
        <QuantityContainer>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <Button type='submit' onClick={addProduct} ml={20} disabled={product.isSold}>
            {isInCart ? 'change quantity' : 'add to cart'}
          </Button>
        </QuantityContainer>
      </SubContainer>
      {error && (
        <Alert type='info'>
          {error} <Link to='/login'>Log in</Link> or <Link to='/register'>register</Link>
        </Alert>
      )}
      {message && <Alert type='success'>{message}</Alert>}
    </Container>
  );
};
