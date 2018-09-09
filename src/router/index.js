import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../modules/main';
import PersistentDrawer from '../components/Drawer';
import neckTraining from '../modules/neckTraining';

const AppRouter = () => (
  <Router>
    <React.Fragment>
      <PersistentDrawer />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/neckTraining" component={neckTraining} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;
