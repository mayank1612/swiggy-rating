import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESTAURANT_DETAILS } from '../../queries/GET_RESTAURANT_DETAILS';
import Progress from '../../components/Progress';

function Restaurant() {
  const { loading, error, data } = useQuery(GET_RESTAURANT_DETAILS);

  if (loading) {
    return <Progress />;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  console.log(data);
  return <div>Restaurant</div>;
}

export default Restaurant;
