import * as express from 'express';
import forms from './form.router';
import posts from './post.router';

const apiRouter = express.Router();

apiRouter.use('/forms', forms);
apiRouter.use('/posts', posts);

export default apiRouter;
