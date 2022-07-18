import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Rating } from '@material-ui/lab';
import { Paper, Grid, Typography } from '@material-ui/core';
import { RESTAURANT } from '../routes/PathConstants';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    margin: '40px 0px',
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    margin: '20px',
  },
  paper: { padding: '5px', cursor: 'pointer' },
  imgWrapper: {
    height: '250px',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px 0px',
  },
});

function Card({ restaurantArray = [] }) {
  const classes = useStyles();
  const history = useHistory();
  const selectRestaurant = (name) => {
    const searchKey = 'restaurant_name';
    history.push({ pathname: RESTAURANT, search: `?${searchKey}=${name}` });
  };

  return (
    <Grid container className={classes.root}>
      {restaurantArray.map((data, index) => {
        const { image, title, rating } = data;
        return (
          <Grid
            item
            className={classes.item}
            xs={3}
            key={index}
            onClick={() => {
              selectRestaurant(title);
            }}
          >
            <Paper elevation={3} className={classes.paper}>
              <div className={classes.imgWrapper}>
                <img src={image}></img>
              </div>
              <div>
                <Typography className={classes.center}>{title}</Typography>
                <Rating
                  className={classes.center}
                  name="read-only"
                  value={rating}
                  readOnly
                ></Rating>
              </div>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Card;
