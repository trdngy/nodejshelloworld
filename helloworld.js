// hello world application for expressjs
var express = require('express');
var app = express();
const myModule = require('./mymodule');
const myLib = require('./insertionsort');

// Routes
app.get('/', function (req, res) {
  let val = myModule.hello();
  // res.send('Hello World!');
  res.send(val);
});

app.get('/sorting', function (req, res) {
  res.send('Initial list\n');
  // TODO: print list before sorting
  var my_list = myLib.initialize();
  console.log(my_list);
  // res.send(my_list);
  // TODO: print list after sorting
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:' + port);
