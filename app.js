const express = require('express');
const app = express();
const parser = require('body-parser');
const expressValidator = require('express-validator');


app.set('view engine', 'pug');
app.use(express.static('public'))
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
app.use(expressValidator());


const articlesController = require('./controller/articlesController');

app.get('/', (req, res) => {
  res.render('index');
})

//app.get('/makeArticle', articlesController.get)
app.get('/makeArticle', articlesController.new);
app.get('/makeArticle/:id', articlesController.new);
app.post('/makeArticle', articlesController.post);


app.get('/gallery', (req, res) => {
  res.render('gallery');
})



app.listen(3000, () => {
  console.log('web server running');
})
