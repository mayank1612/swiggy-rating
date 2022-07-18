import React, { useContext, useState } from 'react';
import { TokenContext } from '../App';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useLazyQuery } from '@apollo/client';
import { HOME } from '../routes/PathConstants';
import { GET_LOGGED_IN_CUSTOMER } from '../queries/GET_LOGGED_IN_CUSTOMER';
import Progress from '../components/Progress';
import { sendDataToSentry } from '..';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  block: {
    display: 'block',
    margin: '10px',
  },
});

function LoginPage() {
  const history = useHistory();
  const contextValue = useContext(TokenContext);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [valid, setValid] = useState(true);
  const classes = useStyles();

  const [checkCredentails, { loading, error }] = useLazyQuery(
    GET_LOGGED_IN_CUSTOMER
  );

  if (loading) {
    <Progress />;
  }
  if (error) {
    sendDataToSentry({
      name: 'Invlid Login',
      message: 'Invalid username or password',
      tags: { severity: 'MODERATE' },
      extra: [{ type: 'errorEncounter', error }],
    });
  }
  const handleLogin = () => {
    if (credentials.username && credentials.password) {
      checkCredentails({
        variables: {
          username: credentials.username,
          password: credentials.password,
        },
        onCompleted: (data) => {
          if (data.customer.length > 0) {
            setValid(true);
            contextValue.setAccessToken(credentials.username);
            history.push(HOME);
          } else {
            setValid(false);
          }
        },
      });
    } else {
      setValid(false);
    }
  };

  const handleUsername = (event) => {
    setCredentials((preValue) => {
      return { ...preValue, username: event.target.value };
    });
  };

  const handlePassword = (event) => {
    setCredentials((preValue) => {
      return { ...preValue, password: event.target.value };
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <TextField
          id="Username"
          label="Username"
          variant="outlined"
          className={classes.block}
          value={credentials?.username}
          onChange={handleUsername}
        />
      </Grid>
      <Grid item>
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          className={classes.block}
          onChange={handlePassword}
          type="password"
          value={credentials?.password}
        />
      </Grid>
      <Grid item>
        {!valid && <Typography>Invalid Username or Password</Typography>}
        <Button
          className={classes.block}
          color="primary"
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
