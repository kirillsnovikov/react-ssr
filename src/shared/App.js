import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Routes from './routes';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <React.Fragment>
      {links}
      <Switch>
        {routes}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

const routes = Routes.map(({ component, path, exact }) => {
  return <Route path={path} key={path} exact={exact} component={component} />;
});
const links = Routes.map(({ path, name }) => (
  <Link to={path} key={name}>
    {name}
  </Link>
));

export default App;
