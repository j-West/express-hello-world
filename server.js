
const express = require('express');
const app = express();

const port = process.env.PORT;



app.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`)
})

app.get('/time', (req, res) => {
  res.send(new Date())
})

if (port) app.listen(port);
else app.listen(8080);
