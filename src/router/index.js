import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import Login from '../modules/auth';
import Main from '../modules/main';

class AppRouter extends PureComponent {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  render() {
    const { authenticated } = this.props.auth;

    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute
            path="/"
            component={Main}
            authenticated={authenticated}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(AppRouter);
