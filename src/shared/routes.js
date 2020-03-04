import Home from './components/pages/Home';
import Posts from './components/pages/Posts';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'home'
  },
  {
    path: '/posts',
    component: Posts,
    name: 'posts'
  }
];

export default Routes;
