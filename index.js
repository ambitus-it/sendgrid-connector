const express = require('express');
const bodyParser = require('body-parser');
const { corsFilter } = require('./config/cors')
const cors = require('cors')
const apiRoutes = require('./routes/')

const app = express();

app.use(express.json())
app.use(corsFilter);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', apiRoutes);

console.log('Listening on port 3000')

app.listen(3000)