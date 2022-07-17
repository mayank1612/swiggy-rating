import { gql } from '@apollo/client';

export const GET_CUSTOMER_DETAILS = gql`
  query GET_CUSTOMER_DETAILS($username: String) {
    customer(where: { username: { _eq: $username } }) {
      id
      created_at
      username
      ratings {
        rating
        review
        restaurant {
          name
        }
      }
    }
  }
`;
