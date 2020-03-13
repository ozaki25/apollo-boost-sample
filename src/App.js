import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
import ExchangeRates from './components/ExchangeRates';
import Dogs from './components/Dogs';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <Dogs onDogSelected={e => console.log(e.target.value)} />
    </ApolloProvider>
  );
}

export default App;
