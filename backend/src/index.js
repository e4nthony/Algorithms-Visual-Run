const express = require('express')
var path = require('path');

const app = express()
const port = 4422

// set the view engine to ejs
app.set('view engine', 'ejs');

// -- Routes --
app.get('/', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/home.ejs')
  res.render(page);
})

app.get('/home', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/home.ejs')
  res.render(page);
})

app.get('/about', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/about.ejs')
  res.render(page);
});

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}/`)
})
