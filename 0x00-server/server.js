const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const movies = require('./Movies.json');
const allow = require('./Allow.json');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.all('/movies', (req, res, next) => {
  if (
    req.method === 'GET' &&
    req.url === `/movies?${allow.user}=${allow.password}`
  ) {
    next();
  } else if (
    req.method === 'POST' &&
    req.url === '/movies' &&
    req.body.user === allow.user &&
    req.body.password === allow.password
  ) {
    next();
  } else {
    res.json({ denied: true, message: 'Acceso denegado' });
  }
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.post('/movies', (req, res) => {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
