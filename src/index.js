const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config( {path: './env.example'});
const server_port = process.env.SERVER_PORT || 8080;
const fixed = process.env.FIXED_MESSAGE;

function startServer() {
  const app = express();
  app.use(bodyParser.text());
  app.use(cookieParser());
  app.get('/hello', (req, res) => {
    res.send('world');
  });

  app.get('/repeat-my-fixed', (req, res) => {
    if (!fixed)
      res.status(404).send('No Message Defined');
    else
      res.send(fixed);
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
  app.get('/repeat-all-my-queries', (req, res) => {
    const tableau_key = Object.keys(req.query);
    var tableau = []; 
    for (const mescouilles in tableau_key) {
      tableau.push(tableau_key[mescouilles]);
  }
  res.send(tableau);
  });
  app.listen(server_port);
  console.log('Ready.');
}
startServer();
