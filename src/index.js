import express from 'express';
import renderApp from './renderApp';

const app = express();

app.use(express.static('public'));
app.get('*', renderApp);
// app.get('/', function(req, res) {
//   return res.send(res.html);
// });

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

export default app;
