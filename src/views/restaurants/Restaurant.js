import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_RESTAURANT_DETAILS } from '../../queries/GET_RESTAURANT_DETAILS';
import Progress from '../../components/Progress';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { HOME } from '../../routes/PathConstants';
import { getParameterByName } from '../../utils/getParams';
import Review from '../../components/Review';

const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
  },
  heading: {
    fontSize: '30px',
  },
  subHeading: {
    fontSize: '20px',
  },
  cardWrapper: {
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  reviewWrapper: {
    margin: '20px 0px',
  },
});

function Restaurant() {
  const history = useHistory();
  const classes = useStyles();
  const searchKey = 'restaurant_name';

  const [getRestaurantDetails, { loading, error, data }] = useLazyQuery(
    GET_RESTAURANT_DETAILS
  );

  useEffect(() => {
    const searchValue = getParameterByName(searchKey);

    if (searchValue) {
      getRestaurantDetails({
        variables: {
          name: searchValue,
        },
      });
    } else {
      history.push(HOME);
    }
  }, []);

  if (loading) {
    return <Progress />;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }

  if (data?.restaurant) {
    if (data?.restaurant.length === 0) {
      history.push(HOME);
    } else {
      const resData = data.restaurant[0];
      const {
        name: restaurantName,
        ratings,
        ratings_aggregate: ratingAggregate,
      } = resData;
      const avgRating = ratingAggregate.aggregate.avg.rating;
      return (
        <div className={classes.root}>
          <Typography className={classes.heading}>{restaurantName}</Typography>
          {ratings.length === 0 ? (
            <Typography className={classes.subHeading}>
              No Reviews Yet!
            </Typography>
          ) : (
            <>
              <Rating
                className={classes.center}
                name="read-only"
                value={avgRating}
                readOnly
              ></Rating>
              <div className={classes.reviewWrapper}>
                {ratings?.map((ratingData, index) => {
                  const { customer, rating, review } = ratingData;
                  return (
                    <Review
                      username={customer.username}
                      rating={rating}
                      review={review}
                      key={index}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      );
    }
  }

  return <Progress />;
}

export default Restaurant;
