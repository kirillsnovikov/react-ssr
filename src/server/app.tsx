import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/components/App';

interface Req {
  url: string;
}

const app = (req: Req, context: Object): string => ReactDOMServer.renderToString(
  <StaticRouter location={req.url} context={context}>
    <App />
  </StaticRouter>,
);

export default app;
