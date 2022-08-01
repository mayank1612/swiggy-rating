import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Grid,
  Typography,
  Paper,
  Button,
  TextField,
} from '@material-ui/core';
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
  textFeild: {
    display: 'block',
    margin: '0px 0px 10px 5px',
  },
});

function Review({ username, rating, review, update = false, callback }) {
  const classes = useStyles();
  const [needUpadte, setNeedUpdate] = useState(false);
  const [updatedRating, setUpdatedRating] = useState(rating);
  const [updatedReview, setUpdatedReview] = useState(review);

  const handleChange = (event) => {
    setNeedUpdate((value) => !value);
    if (event.target.innerText === 'SAVE') {
      callback(updatedRating, updatedReview);
    }
  };

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
      <Typography className={classes.typo}>Rating:</Typography>

      {update ? (
        <>
          <Rating
            name="simple-controlled"
            value={updatedRating}
            readOnly={!needUpadte}
            onChange={(event, newValue) => {
              setUpdatedRating(newValue);
            }}
          />
          <Typography className={classes.typo}>Review:</Typography>
          {needUpadte ? (
            <TextField
              className={classes.textFeild}
              id="standard-basic"
              label="Your prceious feedback"
              multiline
              value={updatedReview}
              onChange={(event) => {
                setUpdatedReview(event.target.value);
              }}
            />
          ) : (
            <Typography className={classes.review}>{updatedReview}</Typography>
          )}

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleChange(event);
            }}
          >
            {needUpadte ? 'Save' : 'Update'}
          </Button>
        </>
      ) : (
        <>
          <Rating
            className={classes.center}
            name={'read-only'}
            value={rating}
            readOnly
          />
          <Typography className={classes.typo}>Review:</Typography>
          <Typography className={classes.review}>{review}</Typography>
        </>
      )}
    </Paper>
  );
}

export default Review;
