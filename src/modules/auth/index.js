import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

const Login = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
  </Switch>
);

export default Login;
