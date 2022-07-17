import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import Progress from '../components/Progress';

const useStyles = makeStyles((theme) => ({
  minHe: {
    minHeight: '80vH',
    overflow: 'hidden',
  },
}));

const Routes = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.minHe} square>
        <Suspense fallback={<Progress />}>
          <Switch>
            {RoutePaths.map(
              ({ path, component: Component, type, exact }, key) => {
                return (
                  <Route
                    exact
                    path={path}
                    render={(routeProps) => <Component {...routeProps} />}
                    key={key}
                  />
                );
              }
            )}
          </Switch>
        </Suspense>
      </Paper>
    </>
  );
};

export default Routes;
