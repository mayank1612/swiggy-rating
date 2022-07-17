import { gql } from '@apollo/client';

export const DELETE_RATING = gql`
  mutation DELETE_RATING($id: Int) {
    delete_rating(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
