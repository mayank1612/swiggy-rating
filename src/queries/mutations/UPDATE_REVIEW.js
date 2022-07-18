import { gql } from '@apollo/client';

export const UPDATE_REVIEW = gql`
  mutation UPDATE_REVIEW(
    $rating: Int
    $review: String
    $customer_id: Int
    $restaurant_id: Int
  ) {
    update_rating(
      where: {
        customer_id: { _eq: $customer_id }
        restaurant_id: { _eq: $restaurant_id }
      }
      _set: { rating: $rating, review: $review }
    ) {
      returning {
        id
        review
        rating
      }
    }
  }
`;
