import React, { useState } from 'react';
import { Container, Img, Name, Price, Label, QuantityContainer, PriceContainer } from './style';
import { Button } from '../../atoms/Button';
import { QuantityInput } from '../../atoms/QuantityInput';
import { ProductLink } from '../../../components/atoms/ProductLink';
import { useCart } from '../../../context/CartContext';
import { firestore } from '../../../firebase/firebase';
import { useAuth } from '../../../context/AuthContext';
import { actions } from '../../../utils/actions';
import { round } from '../../../utils/helpers';

export const CartItem = ({ product, setError }) => {
  const [cart, dispatch] = useCart();
  const [quantity, setQuantity] = useState(cart.find((currentProduct) => currentProduct.slug === product.slug)?.quantity || 1);
  const { currentUser } = useAuth();

  const handleQuantity = (e) => {
    const { value } = e.target;

    if (parseInt(value) > 0 && value[0] !== '0') {
      setQuantity(value);
      setError('');
    } else {
      setError('Incorrect value');
    }
  };

  const handleSetProduct = () => {
    if (currentUser) {
      firestore
        .collection(currentUser.uid)
        .doc(product.slug)
        .set({ ...product, quantity });
    }

    dispatch({
      type: actions.SET_PRODUCT,
      product: { ...product, quantity },
    });
  };

  const handleDeleteProduct = () => {
    firestore.collection(currentUser.uid).doc(product.slug).delete();

    dispatch({
      type: actions.DELETE_PRODUCT,
      product,
    });
  };

  return (
    <Container>
      <ProductLink to={`/product/${product.slug}`}>
        <Img src={product.image} alt={product.name} />
      </ProductLink>
      <div>
        <Name>
          <ProductLink to={`/product/${product.slug}`}>{product.name}</ProductLink>
        </Name>
        <QuantityContainer>
          <PriceContainer>
            <p>cost</p>
            <Price>${round(product.price * product.quantity, 2)}</Price>
          </PriceContainer>
          <Label htmlFor={`${product.slug}-quantity`}>
            quantity
            <QuantityInput min='1' type='number' id={`${product.slug}-quantity`} onChange={handleQuantity} value={quantity} color='gray' />
          </Label>
          <Button size='s' onClick={handleSetProduct}>
            set
          </Button>
          <Button size='s' onClick={handleDeleteProduct} ml={10}>
            delete
          </Button>
        </QuantityContainer>
      </div>
    </Container>
  );
};
