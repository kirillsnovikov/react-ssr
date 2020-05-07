import Home from './components/pages/Home';
import Posts from './components/pages/Posts';
import Forms from './components/pages/Forms';

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
  },
  {
    path: '/forms',
    component: Forms,
    name: 'forms'
  }
];

export default Routes;
