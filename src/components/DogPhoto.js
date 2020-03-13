import React from 'react';
import { useQuery } from '@apollo/client';

import query from '../graphql/query';

function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(query.GET_DOG_PHOTO, {
    variables: { breed },
    skip: !breed,
    pollInterval: 5000,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <img src={data.dog.displayImage} />
      <div>
        <button onClick={() => refetch()}>Refetch!</button>
      </div>
    </>
  );
}

export default DogPhoto;
