import React, { useContext } from 'react';
import { Grid, AppBar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SwiggyLogo from '../assests/swiggy-logo.png';
import { HOME, LOGIN, LOGOUT, PROFILE } from '../routes/PathConstants';
import { TokenContext } from '../App';
import { setCookie } from '../utils/setCookies';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFF',
    padding: '10px 20px',
  },
  container: {
    alignItems: 'center',
  },
  profile: {
    marginLeft: 'auto',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '10px',
    padding: '10px',
    border: '1px solid transparent',
    '&:hover': {
      border: '1px solid #FC8019',
      borderRadius: '5px',
    },
  },
  link: {
    color: '#FC8019',
  },
});

function Navbar() {
  const classes = useStyles();
  const contextValue = useContext(TokenContext);
  return (
    <AppBar position="sticky" className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item>
          <a href={HOME}>
            <img
              src={SwiggyLogo}
              width="200"
              height="60"
              alt="Swiggy Logo"
              className={classes.imageLogo}
            />
          </a>
        </Grid>
        <Grid item className={classes.profile}>
          <div className={classes.button}>
            <Link href={PROFILE} underline="none" className={classes.link}>
              MY PROFILE
            </Link>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.button}>
            <Link
              href={LOGIN}
              underline="none"
              className={classes.link}
              onClick={() => {
                setCookie('');
              }}
            >
              LOG OUT
            </Link>
          </div>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Navbar;
