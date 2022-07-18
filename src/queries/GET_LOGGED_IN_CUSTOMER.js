import { gql } from '@apollo/client';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query GET_CUSTOMER_DETAILS($username: String, $password: String) {
    customer(
      where: { username: { _eq: $username }, password: { _eq: $password } }
    ) {
      id
      username
    }
  }
`;
