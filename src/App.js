import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { React, useEffect, useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Progress from './components/Progress';
import Routes from './routes/Routes';
import Footer from './views/Footer';
import Navbar from './views/Navbar';

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.REACT_APP_BASE_API_URL}/graphql`,
      headers: {
        // Authorization: `Bearer ${authToken}`,
        'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_SECRET_KEY,
      },
    }),
    cache: new InMemoryCache(),
  });
};

export const TokenContext = createContext({});

function App() {
  const [client] = useState(createApolloClient());
  const [accessToken, setAccessToken] = useState();
  const [cookieEnable, setCookieEnable] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [accessToken]);

  // if (loading) {
  //   return <Progress />;
  // }

  return (
    <TokenContext.Provider
      value={{ accessToken, setAccessToken, cookieEnable }}
    >
      <ApolloProvider client={client}>
        <BrowserRouter>
          {/* {accessToken && cookieEnable && <Navbar />} */}
          <Navbar />
          <Routes />
          {/* {accessToken && cookieEnable && <Footer />} */}
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </TokenContext.Provider>
  );
}

export default App;
