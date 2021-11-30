import React, { ReactElement } from 'react';
import Router from './router';
import history from './router/history';
import GlobalStyles from '@movies/webapp-components/src/styles/GlobalStyle';

const appWithRoutes = (): ReactElement => (
  <>
    <GlobalStyles />
    <Router history={history} />
  </>
)

export default appWithRoutes;
