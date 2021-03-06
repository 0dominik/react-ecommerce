import { createContext, useEffect, useReducer, useContext } from 'react';
import { cartReducer } from '../reducers/cartReducer';
import { firestore } from '../firebase/firebase';
import { useAuth } from './AuthContext';
import { actions } from '../utils/actions';

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    if (currentUser) {
      firestore
        .collection(currentUser.uid)
        .get()
        .then((products) => {
          dispatch({
            type: actions.SET_INITAL,
            product: products.docs.map((doc) => doc.data()),
          });
        });
    }
  }, [currentUser]);

  return <CartContext.Provider value={[cart, dispatch]}>{children}</CartContext.Provider>;
};
