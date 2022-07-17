import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { HOME } from './PathConstants';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    height: 'calc(100vh)',
    justifyContent: 'center',
  },
  verticalCenter: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-5rem',
  },
  link: { cursor: 'pointer', textDecoration: 'none' },
});

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.verticalCenter}>
        <div>
          <h2>Page Not Found</h2>
          <p>Sorry but the page you are looking for does not exist.</p>
          <Link to={HOME} className={classes.link}>
            <Button color="primary" variant="contained">
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
