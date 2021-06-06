import React, { useState } from 'react';
import { Container, Img, Name, ButttonsContainer, PriceContainer, SubContainer } from './style';
import { Button } from '../../atoms/Button';
import { Price } from '../../atoms/Price';
import { ProductLink } from '../../atoms/ProductLink';
import { Quantity } from '../Quantity';
import { useCart } from '../../../context/CartContext';
import { firestore } from '../../../firebase/firebase';
import { useAuth } from '../../../context/AuthContext';
import { actions } from '../../../utils/actions';
import { round } from '../../../utils/helpers';

export const CartItem = ({ product, setError }) => {
  const [, dispatch] = useCart();
  const [quantity, setQuantity] = useState(product.quantity);
  const { currentUser } = useAuth();

  const handleSetProduct = () => {
    const newProduct = { ...product, quantity: parseInt(quantity) };

    firestore
      .collection(currentUser.uid)
      .doc(product.slug)
      .set(newProduct)
      .then(() => {
        dispatch({
          type: actions.SET_PRODUCT,
          product: newProduct,
        });
        setError('');
      })
      .catch(() => {
        setError('Failed to set product');
      });
  };

  const handleDeleteProduct = () => {
    firestore
      .collection(currentUser.uid)
      .doc(product.slug)
      .delete()
      .then(() => {
        dispatch({
          type: actions.DELETE_PRODUCT,
          slug: product.slug,
        });
      })
      .catch(() => {
        setError('Failed to delete product');
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
        <SubContainer>
          <PriceContainer>
            <p>cost</p>
            <Price>${round(product.price * product.quantity, 2)}</Price>
          </PriceContainer>
          <Quantity quantity={quantity} setQuantity={setQuantity} showLabel={false} />
          <ButttonsContainer>
            <Button size='s' onClick={handleSetProduct} ml={5}>
              set
            </Button>
            <Button size='s' onClick={handleDeleteProduct} ml={5}>
              delete
            </Button>
          </ButttonsContainer>
        </SubContainer>
      </div>
    </Container>
  );
};
