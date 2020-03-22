import express from 'express';
import post from './post.router';

const router = express.Router();

class ApiRouter {
  constructor(routes, router) {
    this.routes = routes;
    this.router = router;
  }
}

const routes = {
  post
};

router.get('/all', (req, res) => {
  console.log('ALL');
});

export default router;
