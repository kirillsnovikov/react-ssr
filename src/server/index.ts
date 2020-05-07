import * as fs from 'fs';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as paths from '../../build/paths';
import './models';
import routes from './routes/api.router';
import main from './app';

const PORT = process.env.PORT || 3000;
const { filenameHtml, dist } = paths;
console.log(filenameHtml, dist);

const app = express();

app.use('/assets', express.static(dist));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('*', (req, res) => {
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

// db.sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log(__dirname, 'DIR');
  console.log(`Server run and listening PORT ${PORT}`);
});
// });

export default app;
