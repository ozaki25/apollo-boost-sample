import React from 'react';
import { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './graphql/client';
import ExchangeRates from './components/ExchangeRates';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <ExchangeRates />
    </ApolloProvider>
  );
}

export default App;
