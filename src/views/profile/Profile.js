import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/styles';
import { GET_CUSTOMER_DETAILS } from '../../queries/GET_CUSTOMER_DETAILS';
import Progress from '../../components/Progress';
import Review from '../../components/Review';
import { Typography } from '@material-ui/core';
import { UPDATE_REVIEW } from '../../queries/mutations/UPDATE_REVIEW';
import { sendDataToSentry } from '../..';
import { getCookie } from '../../utils/getCookie';

const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
  },
});

function profile() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_CUSTOMER_DETAILS, {
    variables: {
      // username: getCookie() ?? 'mayank',
      username: 'mayank',
    },
  });

  const [updateReview] = useMutation(UPDATE_REVIEW, {
    refetchQueries: [GET_CUSTOMER_DETAILS],
  });

  if (loading) {
    return <Progress />;
  }
  if (error) {
    console.error(error);
    sendDataToSentry({
      name: 'GraphQL Error',
      message: 'Get customer query failed',
      tags: { severity: 'CRITICAL' },
      extra: [{ type: 'errorEncounter', error }],
    });

    return <div>Error!</div>;
  }

  const updateValues = (variables) => {
    console.log(variables);
    updateReview({ variables: variables });
  };

  const resData = data?.customer[0];
  const customerId = resData.id;

  return resData.ratings?.length === 0 ? (
    <Typography>No reviews yet!</Typography>
  ) : (
    <div className={classes.root}>
      <div className={classes.reviewWrapper}>
        {resData.ratings?.map((ratingData, index) => {
          const { restaurant, rating, review } = ratingData;
          const restaurantId = restaurant.id;
          return (
            <Review
              username={restaurant.name}
              rating={rating}
              review={review}
              key={index}
              update
              callback={(rating, review) => {
                updateValues({
                  customer_id: customerId,
                  rating,
                  review,
                  restaurant_id: restaurantId,
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default profile;
