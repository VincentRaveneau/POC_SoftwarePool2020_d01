const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

function startServer() {
  const app = express();
  app.use(bodyParser.text());
  app.use(cookieParser());
  app.get('/hello', (req, res) => {
    res.send('world');
  });

  app.get('/repeat-my-fixed', (req, res) => {
    res.sendStatus(200);
  });

  app.get('/repeat-my-query', (req, res) => {
    const { message } = req.query;
    if (!message) res.sendStatus(400);
    else res.send(req.query.message);
  });

  app.post('/repeat-my-body', (req, res) => {
    if (!req.body) res.sendStatus(400);
    else res.send(req.body);
  });
  app.get('/repeat-my-cookie', (req, res) => {
    if (!req.cookies.message) res.sendStatus(400);
    else res.send(req.cookies.message);
  });
  app.get('/repeat-my-header', (req, res) => {
    if (!req.header('X-Message')) res.sendStatus(400);
    else res.send(req.header('X-Message'));
  });
  app.get('/repeat-my-param/:message', (req, res) => {
    res.send(req.params.message);
  });
  app.listen(8080);
}
startServer();
