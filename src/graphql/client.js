import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cklof4v8tymjy01z59dfm8dnv/master',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_AUTH_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
