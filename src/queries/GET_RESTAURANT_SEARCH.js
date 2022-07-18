import { gql } from '@apollo/client';

export const GET_RESTAURANT_SEARCH = gql`
  query GET_RESTAURANT_SEARCH($name: String = "") {
    restaurant(where: { name: { _iregex: $name } }) {
      name
      location
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
