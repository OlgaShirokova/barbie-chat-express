'use strict'

const fs = require('fs');
const dbPath = './db.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let createMsg = function (body) {
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

module.exports = createMsg;
