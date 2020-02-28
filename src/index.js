import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.static('dist'));
app.get('*', function(req, res) {
  console.log({
    a: {
      b: {
        c: 1
      }
    }
  });
  // console.log(res);
  res.json({
    a: {
      b: {
        c: 1
      }
    }
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
