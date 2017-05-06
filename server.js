'use strict'

var express = require('express')
var app = express();
const bodyParser = require('body-parser');
const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('static'))

app.use(router);

app.listen(3000, function () {
  console.log('Barbie Chat Express running on port 3000...')
})
