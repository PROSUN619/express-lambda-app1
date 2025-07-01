const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/hello', (req, res) => {
  //trigger action
  res.json({ message: 'Hello from Express + Lambda!' });
});

module.exports.handler = serverless(app);