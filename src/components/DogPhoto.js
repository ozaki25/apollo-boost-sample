import React from 'react';
import { useQuery } from '@apollo/client';

import query from '../graphql/query';

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(query.GET_DOG_PHOTO, {
    variables: { breed },
    skip: !breed,
    pollInterval: 2000,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <img src={data.dog.displayImage} style={{ height: 300, width: 300 }} />
  );
}

export default DogPhoto;
