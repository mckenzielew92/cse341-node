express = require('express');
path = require('path');
const mainRoutes = require('./routes/index');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRoutes);
app.listen(2000);

