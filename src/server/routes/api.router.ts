import * as fs from 'fs';
import * as express from 'express';
import { paths } from '../../../build/paths';

const apiRouter = express.Router();

fs.readdirSync(paths.routes)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== 'api.router.ts' &&
      file.slice(-3) === '.ts'
  )
  .forEach((file) => {
    import(`./${file}`).then((routes) => {
      Object.keys(routes.apiRoutes).forEach((route) => {
        let actions = routes.apiRoutes[route];
        actions.forEach((action) => {
          let { type, method } = action;
          apiRouter[type](route, method);
        });
      });
    });
  });

export default apiRouter;
