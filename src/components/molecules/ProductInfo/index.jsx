import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button';
import { Alert } from '../../atoms/Alert';
import { QuantityInput } from '../../atoms/QuantityInput';
import { Container, Name, Description, Price, QuantityContainer, SubContainer, Label } from './style';
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

  useEffect(() => {
    window.scrollTo(0, 0);
    setMessage('');
    setError('');

    if (!loading && product) {
      setQuantity(cart.find((cartProduct) => product.slug === cartProduct.slug)?.quantity || 1);
    }
  }, [product]);

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
      setMessage('Product successfully added');
    } else {
      setError(`You have to log in to add product to cart.`);
    }
  };

  const handleQuantity = (e) => {
    const { value } = e.target;
    if (parseInt(value) > 0 && value[0] !== '0') {
      setQuantity(value);
    }
  };

  return (
    <Container>
      <Name isSold={product.isSold}>
        {product.isSold && '[SOLD] '}
        <span className='hl'>{product.name}</span> - {product.category.name}
      </Name>
      <Description>{product.description}, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem commodi tempora voluptatibus veniam</Description>
      <SubContainer>
        <Label>
          cost
          <Price>${product.price}</Price>
        </Label>
        <QuantityContainer>
          <Label htmlFor='quantity'>
            quantity
            <QuantityInput min='1' type='number' id='quantity' value={quantity} onChange={handleQuantity} />
          </Label>
          <Button type='submit' onClick={addProduct} mt={-20} disabled={product.isSold}>
            add to cart
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
