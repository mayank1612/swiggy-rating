import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  root: {
    backgroundColor: '#FC8019',
    padding: '10px 20px',
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
  },
  typo: {
    color: '#fff',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item>
          <Typography className={classes.typo}>
            Deliver Food At Your Door Step!
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

export default Footer;
