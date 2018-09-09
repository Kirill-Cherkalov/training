import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal, ThemeProvider } from 'styled-components';

// import AppRouter from './router';
import configureStore from './redux/configureStore';
import theme from './theme';

import PersistentDrawer from './components/Drawer';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
`;

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistentDrawer />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
