const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Worldwhfeih')
})

app.listen(3000)