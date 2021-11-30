import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { IProps } from './types';
import routes from './routes';
import Header from '@movies/webapp-components/src/components/Header';

// Views
import Movies from '../views/Movies';
import Series from '../views/Series';
import Homepage from '../views/Homepage';

const RouterComponent = ({ history }: IProps): React.ReactElement => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path={routes.movies}><Movies /></Route>
        <Route exact path={routes.series}><Series /></Route>
        <Route exact path={routes.homepage}><Homepage /></Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
