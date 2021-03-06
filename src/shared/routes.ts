import { RouteProps } from 'react-router-dom';
import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import Forms from './components/pages/Forms';

const Routes: Array<RouteProps> = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/posts',
    exact: true,
    component: Posts,
  },
  {
    path: '/forms',
    exact: true,
    component: Forms,
  },
];

export default Routes;
