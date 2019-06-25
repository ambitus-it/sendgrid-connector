const express = require('express');
const bodyParser = require('body-parser');
const { corsFilter } = require('./cors')
const cors = require('cors')
const apiRoutes = require('../routes/index')

module.exports = function() {

  const app = express();
  app.use(corsFilter);
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use('/api', apiRoutes);

  return app;
}
