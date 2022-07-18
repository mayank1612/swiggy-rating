import React, { useContext, useState } from 'react';
import { TokenContext } from '../App';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
  const contextValue = useContext(TokenContext);
  const { username, setUsername } = useState('');
  const { password, setPassword } = useState('');
  const classes = useStyles();

  const handleLogin = () => {
    console.log({ username, password });
  };
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <TextField
          id="Username"
          label="Username"
          variant="outlined"
          className={classes.block}
          value={username}
          onChange={(event) => {
            setUsername(event.target);
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          className={classes.block}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
      </Grid>
      <Grid item>
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
