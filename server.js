'use strict'

var express = require('express')
var app = express();
var path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const dbPath = './db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('static'))


setInterval(function () {
  fs.writeFile(dbPath, JSON.stringify(db));
}, 5000);


app.get('/messages', function (req, res) {
  res.json(db.msgs);
})

var createMsg = function (body) {
  let id = db.msgs.length;
  let timestamp = Date.now();
  let user = body.user;
  let content = body.content;

  return {
    id,
    timestamp,
    user,
    content,
  };
}

app.post('/userMsgs', function (req, res) {
  console.log('body-> ', req.body);
  let tempMsg = createMsg(req.body);
  db.msgs.push(tempMsg);
  console.log('recibido');
  res.json('done!');
})



app.listen(3000, function () {
  console.log('Barbie Chat Express running on port 3000...')
})
