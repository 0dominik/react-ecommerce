import { actions } from '../utils/actions';

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      return [...state.filter((product) => product.slug !== action.product.slug), action.product];
    case actions.SET_PRODUCT:
      return [...state.map((product) => (product.slug === action.product.slug ? { ...product, quantity: parseInt(action.product.quantity) } : product))];
    case actions.DELETE_PRODUCT:
      return [...state.filter((product) => product.slug !== action.slug)];
    case actions.DELETE_ALL:
      return [];
    case actions.SET_INITAL:
      return action.product;
    default:
      return state;
  }
};
