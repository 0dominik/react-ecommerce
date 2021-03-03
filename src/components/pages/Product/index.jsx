import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button';
import { Alert } from '../../atoms/Alert';
import { QuantityInput } from '../../atoms/QuantityInput';
import { ProductItem } from '../../molecules/ProductItem';
import { Container, Img, Board, BoardContainer, Name, Description, Price, AddContainer, Recommended, SubContainer, RecommendedHeading, Label } from './style';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { actions } from '../../../utils/actions';
import { firestore } from '../../../firebase/firebase';
import { useAuth } from '../../../context/AuthContext';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from '../../../hooks/useTheme';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../../../graphql/queries';

export const Product = () => {
  const { slug } = useParams();
  const { data: { product, recommended } = {}, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      slug,
    },
  });

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const [cart, dispatch] = useCart();
  const theme = useTheme();
  const { currentUser } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMessage('');

    if (!loading && product) {
      setQuantity(cart.find((product) => product.slug === slug)?.quantity || 1);
      document.title = `Olios - ${product.name}`;
    }

    return () => {
      document.title = `Olios`;
    };
  }, [product]);

  const addProduct = () => {
    if (currentUser && !product.isSold) {
      firestore
        .collection(currentUser.uid)
        .doc(product.slug)
        .set({
          name: product.name,
          price: product.price,
          image: product.image.url,
          slug: product.slug,
          quantity: parseInt(quantity),
        });

      dispatch({
        type: actions.ADD_PRODUCT,
        product: {
          name: product.name,
          price: product.price,
          image: product.image.url,
          slug: product.slug,
          quantity: parseInt(quantity),
        },
      });
    } else {
      setMessage('You have to log in to add product to cart.');
    }
  };

  if (loading) {
    return (
      <Container>
        <PulseLoader color={theme.colors.primary} size={20} css={{ marginTop: '50vh' }} />
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <Alert type='error'>No product found</Alert>
      </Container>
    );
  }

  return (
    <Container>
      {!product ? (
        <Alert type='error'>No product found</Alert>
      ) : (
        <>
          <Img src={product.image.url} alt={product.name} />
          <BoardContainer>
            <Board>
              <Name isSold={product.isSold}>
                {product.isSold && '[SOLD] '}
                <span className='hl'>{product.name}</span> - {product.category.name}
              </Name>
              <Description>{product.description}asdasdasd sa afa sf as f Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem commodi tempora voluptatibus veniam</Description>
              <SubContainer>
                <Label>
                  cost
                  <Price>${product.price}</Price>
                </Label>
                <AddContainer>
                  <Label htmlFor='quantity'>
                    quantity
                    <QuantityInput
                      min='1'
                      type='number'
                      id='quantity'
                      value={quantity}
                      onChange={(e) => {
                        if (parseInt(e.target.value) > 0 && e.target.value[0] !== '0') {
                          setQuantity(e.target.value);
                        }
                      }}
                    />
                  </Label>
                  <Button type='submit' onClick={addProduct} mt={-20} disabled={product.isSold}>
                    add to cart
                  </Button>
                </AddContainer>
              </SubContainer>
              {message && (
                <Alert type='info'>
                  {message} <Link to='/login'>Log in</Link> or <Link to='/register'>register</Link>
                </Alert>
              )}
            </Board>
            <Recommended>
              <RecommendedHeading>recommended</RecommendedHeading>
              {recommended.map((product) => (
                <ProductItem key={product.slug} product={product} margin='0px' />
              ))}
            </Recommended>
          </BoardContainer>
        </>
      )}
    </Container>
  );
};
