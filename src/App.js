import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './graphql/client';
import Dogs from './components/Dogs';
import DogPhoto from './components/DogPhoto';

function App() {
  const [dog, setDog] = useState(null);
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <Dogs onDogSelected={e => setDog(e.target.value)} />
      {dog && <DogPhoto breed={dog} />}
    </ApolloProvider>
  );
}

export default App;
