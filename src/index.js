function startServeur() {
  const express = require('express');
  const app = express();
  app.listen(8080);
  app.get('/hello', (req, res) => {
    res.send('world');
  });
  app.get('/repeat-my-fixed', (req, res) => {
    res.sendStatus(200);
  });
}

startServeur();
