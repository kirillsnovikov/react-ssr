import 'reflect-metadata';

import * as fs from 'fs';
import express from 'express';
import * as bodyParser from 'body-parser';
import { paths } from '../../build/paths';
import { connection } from './db';
import { config } from '../config/config';
import apiRouter from './routes/api.router';
import main from './app';
import nodeErrorHandler from './middlewares/nodeErrorHandler';
import { matchPath } from 'react-router-dom';

const PORT: number = config.server.port;
const HOST: string = config.server.host;
const { filenameHtml, dist } = paths;

export interface IApp {
  startApp: () => Promise<void>;
}

export class App implements IApp {
  readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.locals.name = config.name;
    this.app.use('/assets', express.static(dist));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use('/api', apiRouter);
    this.renderHtml();
  }

  renderHtml(): void {
    this.app.get('*', (req, res) => {
      console.log(
        matchPath(req.url, {
          path: '/forms',
          exact: true,
        })
      );
      const context = {};
      const root = main(req, context);

      fs.readFile(filenameHtml, 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(404).send('Something went wrong');
        }
        return res.send(
          data.replace('<div id="root"></div>', `<div id="root">${root}</div>`)
        );
      });
    });
  }

  startApp = async (): Promise<void> => {
    const conn = await connection;
    console.log(
      `Connected to database. Connection: ${conn.name} / ${conn.options.database}`
    );
    await this.startServer();
  };

  startServer(): Promise<boolean> {
    return new Promise((resolve) => {
      this.app
        .listen(PORT, HOST, () => {
          console.log(`Server started at http://${HOST}:${PORT}`);
          resolve(true);
        })
        .on('error', nodeErrorHandler);
    });
  }
}

// app.listen(PORT, (): void => {
//   console.log(__dirname, 'DIR');
//   console.log(`Server run and listening PORT ${PORT}`);
// });

// export default app;
