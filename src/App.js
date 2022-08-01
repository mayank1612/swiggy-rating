import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { React, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/Routes';
import { getCookie } from './utils/getCookie';
import Footer from './views/Footer';
import Navbar from './views/Navbar';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.REACT_APP_BASE_API_URL}/graphql`,
      headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_SECRET_KEY,
      },
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client] = useState(createApolloClient());
  const checkCookie = getCookie();

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        {/* {checkCookie && checkCookie !== '' && <Navbar />} */}
        <Navbar />
        <Routes />
        {/* {checkCookie && checkCookie !== '' && <Footer />} */}
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
