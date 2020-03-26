import fs from 'fs';
import paths from '../../../build/paths';
import express from 'express';

const router = express.Router();

// class ApiRouter {
//   constructor(routes, router) {
//     this.routes = routes;
//     this.router = router;
//   }
// }

fs.readdirSync(paths.routes)
  .filter(
    file =>
      file.indexOf('.') !== 0 &&
      file !== 'api.router.js' &&
      file.slice(-3) === '.js'
  )
  .forEach(file => {
    import(`./${file}`).then(routes => {
      for (let [route, actions] of Object.entries(routes.routes)) {
        actions.forEach(action => {
          let { type, method } = action;
          router[type](route, method);
        });
      }
    });
  });

export default router;
