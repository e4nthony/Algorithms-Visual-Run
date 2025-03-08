const express = require('express')
var path = require('path');

const app = express()
const port = 4422

app.get('/', (req, res) => {
  const page = path.join(__dirname, '../../frontend/home.html')
  res.sendFile(page);
})

app.get('/home', (req, res) => {
  const page = path.join(__dirname, '../../frontend/home.html')
  res.sendFile(page);
})

app.get('/about', (req, res) => {
  const page = path.join(__dirname, '../../frontend/about.html')
  res.sendFile(page);
});

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}/`)
})
