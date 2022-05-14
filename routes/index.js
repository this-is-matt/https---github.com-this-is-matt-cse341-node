const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Your Mom');
});

module.exports = routes;
