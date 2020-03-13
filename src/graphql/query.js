import { gql } from '@apollo/client';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export default {
  GET_DOGS,
};
