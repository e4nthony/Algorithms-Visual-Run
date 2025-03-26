const express = require('express')
const path = require('path');

const app = express()
const port = 4422

// serve public folder content to clent requests 
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// set the view engine to ejs
app.set('view engine', 'ejs');


// init params default values
var title = '';
var stylesheets_list = '';


// -- Routes --
app.get('/', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/home.ejs')
  
  res.render(page, { 
    title: '/',
    stylesheets_list
  });

})

app.get('/home', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/home.ejs')
  
  res.render(page, { 
    title: 'home',
    stylesheets_list
  });

})

app.get('/about', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/about.ejs')
  
  res.render(page, { 
    title: 'about',
    stylesheets_list
  });

});

app.get('/knapsack_page', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/knapsack_page.ejs');

  const codeFilePath = path.join(__dirname, '../../frontend/algorithms/knapsack.ejs');
//path.join(__dirname, '../../frontend/public/styles/knapsack_styles.css');
  const ks_stylesheets_list = '<link rel="stylesheet" href="/styles/knapsack_styles.css">'

  res.render(page, { 
    title: 'knapsack_page',
    stylesheets_list: ks_stylesheets_list,
    code_path: codeFilePath,
    table_content: 'TABLE'
  });

});

app.get('/dynamic_page/', (req, res) => {
  const page = path.join(__dirname, '../../frontend/views/dynamic_page.ejs')

  res.render(page, { 
    title: 'dynamic_page',
    stylesheets_list,
    content_path: 'partials/default_dynamic_content.ejs' 
  });

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

  res.render(page, { 
    title: 'dynamic_page with parameter',
    stylesheets_list,
    content_path: contentFilePath 
  });

});


app.listen(port, () => {
  console.log(`Server running http://localhost:${port}/`)
})
