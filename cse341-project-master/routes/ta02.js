//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const { application } = require('express');
const express = require('express');
const router = express.Router();

const array = ['Billy', 'Mary', 'Steve'];

router.get('/', (req, res, next) => {
  res.render('pages/ta02.ejs', {
    title: 'Team Activity 02',
    name: array,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

router.post('/adduser' , function(req, res, next){
//req.body object has your form values
console.log(req.body.username);
array.push(req.body.username)
});

router.post('/removeUser' , function(req, res, next){
  //req.body object has your form values
  console.log(req.body.username);
  let index = array.indexOf(req.body.username);
  array.splice(index, 1);
  res.redirect('/ta02/');
  });

module.exports = router;
