import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../dashboard';

const Main = () => (
  <div>
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default Main;
