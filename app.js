const express = require('express');
const app = express();
const parser = require('body-parser');


app.set('view engine', 'pug');
app.use(express.static('public'))
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());



const articlesController = require('./controller/articlesController');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/gallery', (req, res) => {
  res.render('gallery');
})

app.get('/makeArticle', articlesController.new);

app.post('/makeArticle', articlesController.post);

app.listen(3000, () => {
  console.log('web server running');
})
