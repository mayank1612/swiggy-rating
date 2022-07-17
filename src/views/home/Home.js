import React from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { GET_RESTAURANT_DETAILS } from '../../queries/GET_RESTAURANT_DETAILS';
import Progress from '../../components/Progress';
import Card from '../../components/Card';

const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
  },
  heading: {
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  cardWrapper: {
    paddingLeft: '3%',
    paddingRight: '3%',
  },
});

function home() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_RESTAURANT_DETAILS);

  if (loading) {
    return <Progress />;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  console.log(data.restaurant);
  const restaurantArray = data.restaurant.map((restaurantData) => {
    const { name, ratings_aggregate: ratingData } = restaurantData;
    return {
      title: name,
      rating: ratingData.aggregate.avg.rating,
    };
  });
  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>Restaurants Rating</Typography>
      <div className={classes.cardWrapper}>
        <Card restaurantArray={restaurantArray}></Card>
      </div>
    </div>
  );
}

export default home;
