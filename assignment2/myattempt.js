const express = require('express');

const { listen } = require('express/lib/application');

const app = express();

// app.use((req, res, next) => {
//     console.log('It worked!')
//     next();
// })

// app.use((req, res, next) => {
//     console.log('Check server for html');
//     res.send('<h1>Worked!</h1>');
// })

//more specific middleware always goes first! (/users and not just /)
app.use('/users', (req, res, next) => {
    console.log('adding-html');
    res.send('<h1>Users Page!<h1>');
});

app.use('/', (req, res, next) => {
    console.log('handling for /')
    res.send('<h1>For handling /, Worked!</h1>')
})

app.listen(2000);