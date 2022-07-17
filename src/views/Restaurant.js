import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANT_DETAILS } from '../queries/GET_RESTAURANT_DETAILS';
import { CircularProgress } from '@material-ui/core';

function Restaurant() {
  const { loading, error, data } = useQuery(GET_RESTAURANT_DETAILS);

  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  console.log(data);
  return <div>Restaurant</div>;
}

export default Restaurant;
