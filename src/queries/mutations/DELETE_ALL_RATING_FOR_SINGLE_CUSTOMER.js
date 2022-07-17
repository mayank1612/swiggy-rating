import { gql } from '@apollo/client';

export const DELETE_ALL_RATING_FOR_SINGLE_CUSTOMER = gql`
  mutation DELETE_ALL_RATING_FOR_SINGLE_CUSTOMER($customer_id: Int!) {
    delete_rating(where: { customer_id: { _eq: $customer_id } }) {
      returning {
        id
      }
      affected_rows
    }
  }
`;
