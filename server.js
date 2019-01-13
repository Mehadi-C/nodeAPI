const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
