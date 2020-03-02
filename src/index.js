function startServeur() {
  const express = require('express');
  const app = express();
  app.listen(8000);
  app.get('/hello', (req, res) => {
    res.send('world');
  });
}

startServeur();
