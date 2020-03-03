import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import paths from '../build/paths';
import path from 'path';
import fs from 'fs';
import App from './shared/App';

// const myApp = 'React ServerSideRender Application';

const renderApp = (req, res) => {
  fs.readFile(path.join(paths.dist, 'index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status('404').send('Something went wrong');
    }
    const context = {};
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          // <Router location={req.url} context={context}>
          <App route={req.url} />
          // </Router>
        )}</div>`
      )
    );
  });
};

export default renderApp;
