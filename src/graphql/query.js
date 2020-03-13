import { gql } from '@apollo/client';

const GET_DOGS = gql`
  query Dogs {
    dogs {
      id
      breed
    }
  }
`;

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export default {
  GET_DOGS,
  GET_DOG_PHOTO,
};
