import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../shared/App';
import paths from '../../build/paths';
import fs from 'fs';

const PORT = process.env.PORT || 3000;

const { filenameHtml, dist } = paths;

const app = express();
app.use('/assets', express.static(dist));
// app.use(express.static('./dist/client'));
app.get('*', (req, res) => {
  console.log('rrr');
  fs.readFile(filenameHtml, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status('404').send('Something went wrong');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <App />
        )}_${Math.random()}</div>`
        // `<div id="root">123123</div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server run and listening PORT ${PORT}`);
});

export default app;
