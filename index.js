const express = require('express');
const bodyParser = require('body-parser');
const { corsFilter } = require('./config/cors')
const cors = require('cors')
const apiRoutes = require('./routes/')

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(corsFilter);
app.use(cors());
apiRoutes.use(bodyParser.json({ limit: '10mb' }));
apiRoutes.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use('/', apiRoutes);

console.log('Listening on port 3000')

app.listen(3000)