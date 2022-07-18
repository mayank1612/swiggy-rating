import { gql } from '@apollo/client';

export const GET_RESTAURANT_DETAILS = gql`
  query GET_RESTAURANT_DETAILS($name: String) {
    restaurant(where: { name: { _eq: $name } }) {
      name
      ratings {
        rating
        review
        customer_id
        customer {
          username
        }
      }
      ratings_aggregate {
        aggregate {
          avg {
            rating
          }
        }
      }
    }
  }
`;
