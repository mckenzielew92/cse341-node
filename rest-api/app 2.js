const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use('/feed', feedRoutes); //any request that starts with feed will be handled

app.listen(8080);