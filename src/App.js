import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = ({ route }) => {
  console.log(route, 'route');
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        {/* <Switch>
          <Route path="/:id" component={Child} children={<Child />} />
        </Switch> */}
      </div>
    </Router>
  );
};

const Child = props => {
  let { id } = useParams();
  console.log(props, 'ID');

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
};

export default App;
