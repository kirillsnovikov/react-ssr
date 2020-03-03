import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import App from '../shared/App';
import paths from '../../build/paths';
import fs from 'fs';

const PORT = process.env.PORT || 3000;
const { filenameHtml, dist } = paths;

const app = express();
app.use('/assets', express.static(dist));
app.get('/', (req, res) => {
  console.log('rrr');
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  console.log(context);
  fs.readFile(filenameHtml, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status('404').send('Something went wrong');
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server run and listening PORT ${PORT}`);
});

export default app;
