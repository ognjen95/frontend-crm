import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = true;
  return (
    <Route {...rest} render={() => (isAuth ? children : <Redirect to="/" />)} />
  );
};

export default PrivateRoute;
