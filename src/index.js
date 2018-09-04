import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal, ThemeProvider } from 'styled-components';

import AppRouter from './router';
import configureStore from './redux/configureStore';
import theme from './theme';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
