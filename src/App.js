import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { React, useState } from 'react';
import Restaurant from './views/Restaurant';

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.REACT_APP_BASE_API_URL}/graphql`,
      headers: {
        // Authorization: `Bearer ${authToken}`,
        'x-hasura-admin-secret': `${process.env.REACT_APP_HASURA_ADMIN_SECRET_KEY}`,
      },
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <Restaurant />
    </ApolloProvider>
  );
}

export default App;
