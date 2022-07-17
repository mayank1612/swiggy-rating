import { gql } from '@apollo/client';

export const GET_RESTAURANT_DETAILS = gql`
  query GET_RESTAURANT_DETAILS($name: String = "") {
    restaurant(where: { name: { _iregex: $name } }) {
      name
      location
      ratings {
        rating
        review
        customer_id
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
