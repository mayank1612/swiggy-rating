import { lazy } from 'react';
import * as allPaths from './PathConstants';
import LoginPage from '../views/LoginPage';
import LogoutPage from '../views/LogoutPage';
import PageNotFound from './PageNotFound';

const Restaurants = lazy(() => import('../views/restaurants/Restaurant'));
const Home = lazy(() => import('../views/home/Home'));
const Profile = lazy(() => import('../views/profile/Profile'));

export const RoutePaths = [
  {
    path: allPaths.HOME,
    component: Home,
    exact: true,
    type: allPaths.PRIVATE,
    permission: [],
  },
  {
    path: allPaths.PROFILE,
    component: Profile,
    exact: true,
    type: allPaths.PRIVATE,
    permission: [],
  },
  {
    path: allPaths.RESTAURANT,
    component: Restaurants,
    exact: true,
    type: allPaths.PRIVATE,
    permission: [],
  },
  {
    path: allPaths.LOGIN,
    component: LoginPage,
    exact: true,
    type: allPaths.PUBLIC,
    permission: [],
  },
  {
    path: allPaths.LOGOUT,
    component: LogoutPage,
    exact: true,
    type: allPaths.PRIVATE,
    permission: [],
  },
  {
    path: allPaths.PAGENOTFOUND,
    component: PageNotFound,
    exact: true,
    type: allPaths.PRIVATE,
    permission: [],
  },
];
