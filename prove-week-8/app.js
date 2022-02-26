const express = require('express');

const frontendRoutes = require('../routes/frontend');

const app = express();

app.use('/frontend', frontendRoutes);

app.listen(8080);