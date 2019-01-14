const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const port = 8000;

mongoose.connect('mongodb://dbuser:developer1@ds044989.mlab.com:44989/t6-test', { useMongoClient: true });

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
