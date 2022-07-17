import { gql } from '@apollo/client';

export const ADD_REVIEW = gql`
  mutation ADD_REVIEW(
    $rating: Int
    $review: String
    $customer_id: Int
    $restaurant_id: Int
  ) {
    insert_rating(
      objects: {
        rating: $rating
        review: $review
        customer_id: $customer_id
        restaurant_id: $restaurant_id
      }
    ) {
      returning {
        id
      }
    }
  }
`;
