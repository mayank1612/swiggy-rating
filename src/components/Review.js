import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Typography, Paper } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
const useStyles = makeStyles({
  paper: {
    padding: '5px',
    margin: '20px 0px',
  },
  typo: {
    margin: '5px',
  },
  review: {
    margin: '5px',
  },
  username: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',
  },
});

function Review({ ratingData }) {
  const classes = useStyles();
  console.log(ratingData);
  const { customer, rating, review } = ratingData;
  const username = customer.username;
  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container>
        <Grid item>
          <Avatar className={classes.avatar}>
            {username[0]?.toUpperCase()}
          </Avatar>
        </Grid>
        <Grid item className={classes.username}>
          <Typography>{username}</Typography>
        </Grid>
      </Grid>
      <Typography className={classes.typo}>Rating</Typography>
      <Rating
        className={classes.center}
        name="read-only"
        value={rating}
        readOnly
      />
      <Typography className={classes.typo}>Review</Typography>
      <Typography className={classes.review}>{review}</Typography>
    </Paper>
  );
}

export default Review;
