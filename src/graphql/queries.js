import { gql } from '@apollo/client';
import { recommendedNumber, pageLimit } from '../utils/constants';

export const GET_PRODUCT = gql`
  query product($slug: String!) {
    product(where: { slug: $slug }) {
      name
      slug
      description
      isSold
      price
      category {
        name
      }
      image {
        url
      }
    }
    recommended: products(first: ${recommendedNumber}) {
      name
      price
      slug
      description
      image {
        url
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query products($skip: Int = 0, $category: String = "", $orderBy: ProductOrderByInput, $minPrice: Int = 0, $maxPrice: Int = 1000) {
    products(first: ${pageLimit}, skip: $skip, orderBy: $orderBy, where: { category: { slug_starts_with: $category }, price_gte: $minPrice, price_lte: $maxPrice }) {
      name
      price
      slug
      description
      isSold
      image {
        url
      }
    }
  }
`;

export const SEARCH_PRODUCT = gql`
  query products($query: String = "") {
    products(first: ${pageLimit}, where: { name_contains: $query }) {
      name
      price
      slug
      description
      isSold
      image {
        url
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      name
      slug
    }
  }
`;
