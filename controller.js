'use strict'
const fs = require('fs');

const createMsg = require('./models/message')
const bodyParser = require('body-parser');
const path = require('path');
const dbPath = './db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

exports.getAll = (req, res) => {
  res.json(db.msgs);
}

exports.postMsg = (req, res) => {
  let tempMsg = createMsg(req.body);
  db.msgs.push(tempMsg);
  res.sendStatus(200)
}

setInterval(()=> {
  fs.writeFile(dbPath, JSON.stringify(db), (err) => {
    if (err) throw err;
  });
}, 5000);
