const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

require('./routes/routes') (app);

app.listen(port, () => console.log(`Listening on port ${port}`));
