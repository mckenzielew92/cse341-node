//to initialize node you type npm init
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); //this will point to the public folder as the 'root' folder
app.use('/admin', adminData.routes); //this /admin will be added to urls in the admin page, but will be ignored in the browser

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(1000);
