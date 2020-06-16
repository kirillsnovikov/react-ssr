import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Routes from '../routes';
import NotFound from './pages/NotFound';

const links = Routes.map(({ path }) => (
  <Link to={path} key={path}>
    {path}
  </Link>
));

const routes = Routes.map(({ component, path, exact }) => <Route path={path} key={path} exact={exact} component={component} />);

const App = () => (
  <>
    {links}
    <Switch>
      {routes}
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
