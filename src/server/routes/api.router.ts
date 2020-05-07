import * as fs from 'fs';
import * as express from 'express';
import paths from '../../../build/paths';

const router = express.Router();

// class ApiRouter {
//   constructor(routes, router) {
//     this.routes = routes;
//     this.router = router;
//   }
// }

fs.readdirSync(paths.routes)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== 'api.router.ts' &&
      file.slice(-3) === '.ts'
  )
  .forEach((file) => {
    // console.log(file);
    import(`./${file}`).then((routes) => {
      for (let [route, actions] of Object.entries(routes.routes)) {
        actions.forEach((action) => {
          let { type, method } = action;
          router[type](route, method);
        });
      }
    });
  });

export default router;
