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

app.get('/dynamic_page/', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/dynamic_page.ejs')

  res.render(page, { content_path: 'partials/default_dynamic_content.ejs' });
});

app.get('/dynamic_page/:initialContentType', (req, res) => {
  const initialContentType = req.params.initialContentType; // Access the route parameter :initialContentType - variable that holds any parameter passed in url, and requires one to route here

  const page = path.join(__dirname, '../../frontend/views/dynamic_page.ejs')

  let contentFilePath; // content's file path for initial assembly of a page for client
  switch (initialContentType) {
    case '1':
      contentFilePath = 'partials/default_dynamic_content.ejs';
      break;
    case '2':
      contentFilePath = 'partials/default_dynamic_content.ejs';
      break;
    default:
      contentFilePath = 'partials/default_dynamic_content.ejs';
      break;
  }

  res.render(page, { content_path: contentFilePath });
});


app.listen(port, () => {
  console.log(`Server running http://localhost:${port}/`)
})
